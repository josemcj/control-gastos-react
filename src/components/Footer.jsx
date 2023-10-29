import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return ( 
        <footer className="bg-slate-900 py-16 px-4 mt-10 flex flex-col items-center">
            <div className="flex justify-center gap-3">
                <a href="https://github.com/josemcj/control-gastos-react/" title="GitHub" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                        icon={ faGithub }
                        style={ { color: '#0f172a' } }
                        className="bg-white p-2 h-5 w-5 rounded-full cursor-pointer hover:bg-slate-200 transition-all"
                    />
                </a>
                <a href="mailto:manuel.contreras1@outlook.com" title="Email">
                    <FontAwesomeIcon
                        icon={ faEnvelope }
                        style={ { color: '#0f172a' } }
                        className="bg-white p-2 h-5 w-5 rounded-full cursor-pointer hover:bg-slate-200 transition-all"
                    />
                </a>
                <a href="https://www.linkedin.com/in/jose-cj/" title="LinkedIn" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon
                        icon={ faLinkedinIn }
                        style={ { color: '#0f172a' } }
                        className="bg-white p-2 h-5 w-5 rounded-full cursor-pointer hover:bg-slate-200 transition-all"
                    />
                </a>
            </div>

            <hr className="border-1 border-slate-600 my-7 w-5/6 sm:w-4/6" />

            <p className="font-medium text-white text-lg text-center">Desarrollado por José Contreras</p>
        </footer>
     );
}

export default Footer;