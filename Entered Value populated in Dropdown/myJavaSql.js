var db = openDatabase('myDb','1.0','TestDB',1024);
db.transaction(function(tx)){
  tx.executeSql();
}
