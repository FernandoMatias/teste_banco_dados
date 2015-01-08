Ext.define('Touch2Demo.store.Contatos',{
	extend: 'Ext.data.Store',
	config: {
		model: 'Touch2Demo.model.Contato',
		proxy: {
			type: 'ajax',
			api:{
			   create: './app/php/criaContato.php', //CRUD
			   read: './app/php/listaContatos.php',
			   update: './app/php/atualizaContato.php',
			   destroy: './app/php/deletaContato.php' 
			},
			
			reader: {
				type: 'xml', //json ou xml
				root: 'contatos',
				record: 'contato'
			},
			
			writer: {
				type: 'xml', //json ou xml
				documentRoot: 'contatos',
				record: 'contato',
				writeAllFields: true,
				encode: true,
				nameProperty: 'mapping'
			}
		},
		autoLoad: true,
		autoSync: true
	}
	
});

