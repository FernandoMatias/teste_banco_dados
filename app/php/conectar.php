<?php
	    $link = mysql_connect("10.0.2.2", "root", "")
		    or die("n�o foi possivel conectar !!!" . mysql_error());
	    $banco = mysql_select_db("teste_xml", $link)
		    or die("Erro ao abrir o banco de dados !!!" . mysql_error());
?>