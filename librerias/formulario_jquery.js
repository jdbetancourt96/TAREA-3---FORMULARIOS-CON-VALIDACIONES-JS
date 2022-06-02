
$("#fm1").validate({
    rules:{
        nombre:{
            required:true,
        },
        apellido:{
            required:true,
        },

        email:{
            required:true,
            email:true
        },

        contraseña:{
            required:true,
        },

        user:{
            required:true,
        }
    },
    messages:{
        nombre:{
            required:"Ingrese un nombre valido",
        },
        apellido:{
            required:"Ingrese un apellido valido",
        },

        email:{
            required:"Ingrese un Correo valido",
            email:"Correo Invalido"
        },

        contraseña:{
            required:"Campo Vacio",
        },

        user:{
            required:"Ingrese un Usuario Valido",
        }
    }
})

$("#boton").click(function(){
    if($("#fm1").valid()==false){
        return;
    }})

    $("#fm2").validate({
        rules:{
    
            correo:{
                required:true,
                email:true
            },
    
            user:{
                required:true,
            },
    
            pais:{
                required:true,
            },
    
            codigo:{
                required:true,
            },
    
            direccion:{
                required:true,
            }
    
        },
        messages:{
            correo:{
                required:"Ingrese un Correo valido",
                email:"Correo Invalido"
            },
    
            user:{
                required:"Usuario Invalido",
            },
    
            pais:{
                required:"Ingrese un Pais",
            },
    
            codigo:{
                required:"Codigo Erroneo",
            },
    
            direccion:{
                required:"Ingrese una direccion valida",
            }
        }
    })
    
    $("#boton").click(function(){
        if($("#fm2").valid()==false){
            return;
        }})


    