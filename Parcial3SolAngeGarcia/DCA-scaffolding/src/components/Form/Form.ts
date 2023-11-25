import firebase from "../../types/firebase"
import { addData } from "../../types/firebase"

const formData = {
    NUsuario: "",
    Color: "",
    Letra:""
}
class dataUserForm extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
        this.render()
    }

    saveName(e:any){
        formData.NUsuario = e?.target?.value;
    }

    saveColor(e:any){
        formData.Color = e?.target?.value;
    }

    saveLetra(e:any){
        formData.Letra = e?.target?.value;
    }

    Submit(e:any){
        console.log("se agrego")
        addData(formData)
    }

    async render(){
        if(this.shadowRoot) {
            this.shadowRoot.innerHTML = `
            <style>
        
            </style>
            `

            const NameUser = this.ownerDocument.createElement("input")
            NameUser.classList.add("input")
            NameUser.placeholder = "Nombre de usuario"
            NameUser.addEventListener("change", this.saveName);
            this.shadowRoot.appendChild(NameUser)

            const Color = this.ownerDocument.createElement("input")
            Color.classList.add("input")
            Color.placeholder = "Digite un color"
            Color.addEventListener("change", this.saveColor);
            this.shadowRoot.appendChild(Color)

            const Letra = this.ownerDocument.createElement("input")
            Letra.classList.add("input")
            Letra.placeholder = "Digite una letra"
            Letra.addEventListener("change", this.saveLetra);
            this.shadowRoot.appendChild(Letra)

            const Guarda = this.ownerDocument.createElement("button")
            Guarda.classList.add("boton")
            Guarda.innerText = "Guardar"
            Guarda.addEventListener("click", this.Submit);
            this.shadowRoot.appendChild(Guarda)

        }
    }
}

customElements.define("my-form", dataUserForm)
export default dataUserForm