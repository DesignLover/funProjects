Option Explicit
Dim Counter, ObjIE,objShell, oExcel, oWorkbook, oSheet, htmltext, Var1,Var1Pos, Var1Txt, Var3Pos, Var2Txt ,a,_
 NoofMin,popsup,oRange, oChart,oMyChart, timewatch, timewatchend,rowcnt

popsup = Msgbox("Do you want to run this script ?",vbYesNo,"Triggerr")

If popsup = vbYes Then

NoofMin = Inputbox("For how many Minutes would you like to analyse traffic, starting from now ?")
NoofMin=NoofMin*60



Set objShell = CreateObject("WScript.Shell")
Set ObjIE = CreateObject("InternetExplorer.Application")

'ObjIE.Visible = True
ObjIE.Navigate ("http://goo.gl/maps/0Uv1D")



Set oExcel = CreateObject("Excel.Application")
Set oWorkbook = oExcel.Workbooks.Open("C:\Users\rakeshm395\Desktop\TimeAnalysis.xlsx")

'oExcel.Visible = True
Set oSheet = oWorkbook.Worksheets("Sheet1")


rowcnt = oSheet.usedrange.rows.count
oSheet.Range("A2:A"&rowcnt).Value = ""
oSheet.Range("B2:B"&rowcnt).Value = ""
oSheet.Range("A:A").NumberFormat = "hh:mm"
timewatchend = Timer() + NoofMin
'Msgbox timewatchend

Counter = 1
Do
     	 
    	  timewatch=Timer()
                    WScript.Sleep(10000)
      	 ObjIE.Refresh

       	Do
       	Loop Until ObjIE.ReadyState = 4

	htmltext = ObjIE.Document.Body.InnerHTML
	Var1 = htmltext

	Var1Pos = InStr(Var1, "Suggested routes")
	'Msgbox Var1Pos

	Var1Txt = Mid(Var1,  Var1Pos,1000)
	'Msgbox Var1Txt

	Var3Pos = InStr(Var1Txt, "In current traffic")
	'Msgbox Var3Pos

	Var2Txt = Mid(Var1Txt, Var3Pos+20, 3)
	'Msgbox Var2Txt

	a=Time()

	oSheet.Cells(Counter, 1).Value = a
	oSheet.Cells(Counter, 2) = Var2Txt

	
       Counter = Counter +1

Loop While timewatch<timewatchend




Set oRange = oSheet.UsedRange
oRange.Select

Set oChart = oExcel.charts
oChart.Add()
Set oMyChart = oChart(1)
oMyChart.Activate
oMyChart.ChartType = 65
'oMyChart.ApplyDataLabels 5


oWorkbook.Save
oExcel.Quit

Set oSheet = Nothing
Set oWorkbook = Nothing

Set oExcel = Nothing
ObjIE.Quit
Set ObjIE = Nothing

'Msgbox "Finish"
'Msgbox Counter

Msgbox "All Finish"

End If