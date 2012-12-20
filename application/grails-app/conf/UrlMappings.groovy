class UrlMappings {

	static mappings = {
            "/$controller/$action?/$id?"{
                    constraints {
                            // apply constraints here
                    }
            }

//            "/"(view:"/index")
            "/"(controller:"gallery")
            "500"(view:'/error')
	}
}
