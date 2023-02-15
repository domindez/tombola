import {  User } from '@auth0/auth0-react'
import React, { SetStateAction, useState } from 'react'
import Header from '../components/Header'

import SideBar from '../components/SideBar'
import '../sass/Profile.scss'

interface Props {
	user: User
	isAuthenticated: boolean
	menu: boolean
	setMenu: React.Dispatch<SetStateAction<boolean>>
}

const Games = ({ setMenu, isAuthenticated, menu, user }: Props) => {
	return (
		<>
			<Header bar='Trivify.es' setMenu={setMenu} isMenu={true} />
			<SideBar
				menu={menu}
				setMenu={setMenu}
				user={user}
				isAuthenticated={isAuthenticated}
			/>
			<div className='legal'>

				<h2>POL&Iacute;TICA DE PRIVACIDAD DEL SITIO WEB</h2>
				<h4>www.trivify.es</h4>
				<h3>I. POL&Iacute;TICA DE PRIVACIDAD Y PROTECCI&Oacute;N DE DATOS</h3>
				<p>
          Respetando lo establecido en la legislaci&oacute;n vigente, Trivify
          (en adelante, tambi&eacute;n Sitio Web) se compromete a adoptar las
          medidas t&eacute;cnicas y organizativas necesarias, seg&uacute;n el
          nivel de seguridad adecuado al riesgo de los datos recogidos.
				</p>
				<h4>Leyes que incorpora esta pol&iacute;tica de privacidad</h4>
				<p>
          Esta pol&iacute;tica de privacidad est&aacute; adaptada a la normativa
          espa&ntilde;ola y europea vigente en materia de protecci&oacute;n de
          datos personales en internet. En concreto, la misma respeta las
          siguientes normas:
				</p>
				<ul>
					<li>
            El Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de
            27 de abril de 2016, relativo a la protecci&oacute;n de las personas
            f&iacute;sicas en lo que respecta al tratamiento de datos personales
            y a la libre circulaci&oacute;n de estos datos (RGPD).
					</li>
					<li>
            La Ley Org&aacute;nica 3/2018, de 5 de diciembre, de
            Protecci&oacute;n de Datos Personales y garant&iacute;a de los
            derechos digitales (LOPD-GDD).
					</li>
					<li>
            El Real Decreto 1720/2007, de 21 de diciembre, por el que se aprueba
            el Reglamento de desarrollo de la Ley Org&aacute;nica 15/1999, de 13
            de diciembre, de Protecci&oacute;n de Datos de Car&aacute;cter
            Personal (RDLOPD).
					</li>
					<li>
            La Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
            Informaci&oacute;n y de Comercio Electr&oacute;nico (LSSI-CE).
					</li>
				</ul>
				<h4>
          Identidad del responsable del tratamiento de los datos personales
				</h4>
				<p>
          El responsable del tratamiento de los datos personales recogidos en
          Trivify es Trivify
				</p>
				<p>Direcci&oacute;n: Avenida Europa 9, 29003 M&aacute;laga</p>
				<p>Tel&eacute;fono de contacto: 660882876</p>
				<p>Email de contacto: info@trivify.es</p>
				<h4>Registro de Datos de Car&aacute;cter Personal</h4>
				<p>
          En cumplimiento de lo establecido en el RGPD y la LOPD-GDD, le
          informamos que los datos personales recabados por Trivify, mediante
          los formularios extendidos en sus p&aacute;ginas quedar&aacute;n
          incorporados y ser&aacute;n tratados en nuestro fichero con el fin de
          poder facilitar, agilizar y cumplir los compromisos establecidos entre
          Trivify y el Usuario o el mantenimiento de la relaci&oacute;n que se
          establezca en los formularios que este rellene, o para atender una
          solicitud o consulta del mismo. Asimismo, de conformidad con lo
          previsto en el RGPD y la LOPD-GDD, salvo que sea de aplicaci&oacute;n
          la excepci&oacute;n prevista en el art&iacute;culo 30.5 del RGPD, se
          mantine un registro de actividades de tratamiento que especifica,
          seg&uacute;n sus finalidades, las actividades de tratamiento llevadas
          a cabo y las dem&aacute;s circunstancias establecidas en el RGPD.
				</p>
				<h4>Principios aplicables al tratamiento de los datos personales</h4>
				<p>
          El tratamiento de los datos personales del Usuario se someter&aacute;
          a los siguientes principios recogidos en el art&iacute;culo 5 del RGPD
          y en el art&iacute;culo 4 y siguientes de la Ley Org&aacute;nica
          3/2018, de 5 de diciembre, de Protecci&oacute;n de Datos Personales y
          garant&iacute;a de los derechos digitales:
				</p>
				<ul>
					<li>
            Principio de licitud, lealtad y transparencia: se requerir&aacute;
            en todo momento el consentimiento del Usuario previa
            informaci&oacute;n completamente transparente de los fines para los
            cuales se recogen los datos personales.
					</li>
					<li>
            Principio de limitaci&oacute;n de la finalidad: los datos personales
            ser&aacute;n recogidos con fines determinados, expl&iacute;citos y
            leg&iacute;timos.
					</li>
					<li>
            Principio de minimizaci&oacute;n de datos: los datos personales
            recogidos ser&aacute;n &uacute;nicamente los estrictamente
            necesarios en relaci&oacute;n con los fines para los que son
            tratados.
					</li>
					<li>
            Principio de exactitud: los datos personales deben ser exactos y
            estar siempre actualizados.
					</li>
					<li>
            Principio de limitaci&oacute;n del plazo de conservaci&oacute;n: los
            datos personales solo ser&aacute;n mantenidos de forma que se
            permita la identificaci&oacute;n del Usuario durante el tiempo
            necesario para los fines de su tratamiento.
					</li>
					<li>
            Principio de integridad y confidencialidad: los datos personales
            ser&aacute;n tratados de manera que se garantice su seguridad y
            confidencialidad.
					</li>
					<li>
            Principio de responsabilidad proactiva: el Responsable del
            tratamiento ser&aacute; responsable de asegurar que los principios
            anteriores se cumplen.
					</li>
				</ul>
				<h4>Categor&iacute;as de datos personales</h4>
				<p>
          Las categor&iacute;as de datos que se tratan en Trivify son
          &uacute;nicamente datos identificativos. En ning&uacute;n caso, se
          tratan categor&iacute;as especiales de datos personales en el sentido
          del art&iacute;culo 9 del RGPD.
				</p>
				<h4>Base legal para el tratamiento de los datos personales</h4>
				<p>
          La base legal para el tratamiento de los datos personales es el
          consentimiento. Trivify se compromete a recabar el consentimiento
          expreso y verificable del Usuario para el tratamiento de sus datos
          personales para uno o varios fines espec&iacute;ficos.
				</p>
				<p>
          El Usuario tendr&aacute; derecho a retirar su consentimiento en
          cualquier momento. Ser&aacute; tan f&aacute;cil retirar el
          consentimiento como darlo. Como regla general, la retirada del
          consentimiento no condicionar&aacute; el uso del Sitio Web.
				</p>
				<p>
          En las ocasiones en las que el Usuario deba o pueda facilitar sus
          datos a trav&eacute;s de formularios para realizar consultas,
          solicitar informaci&oacute;n o por motivos relacionados con el
          contenido del Sitio Web, se le informar&aacute; en caso de que la
          cumplimentaci&oacute;n de alguno de ellos sea obligatoria debido a que
          los mismos sean imprescindibles para el correcto desarrollo de la
          operaci&oacute;n realizada.
				</p>
				<h4>Fines del tratamiento a que se destinan los datos personales</h4>
				<p>
          Los datos personales son recabados y gestionados por Trivify con la
          finalidad de poder facilitar, agilizar y cumplir los compromisos
          establecidos entre el Sitio Web y el Usuario o el mantenimiento de la
          relaci&oacute;n que se establezca en los formularios que este
          &uacute;ltimo rellene o para atender una solicitud o consulta.
				</p>
				<p>
          Igualmente, los datos podr&aacute;n ser utilizados con una finalidad
          comercial de personalizaci&oacute;n, operativa y estad&iacute;stica, y
          actividades propias del objeto social de Trivify, as&iacute; como para
          la extracci&oacute;n, almacenamiento de datos y estudios de marketing
          para adecuar el Contenido ofertado al Usuario, as&iacute; como mejorar
          la calidad, funcionamiento y navegaci&oacute;n por el Sitio Web.
				</p>
				<p>
          En el momento en que se obtengan los datos personales, se
          informar&aacute; al Usuario acerca del fin o fines espec&iacute;ficos
          del tratamiento a que se destinar&aacute;n los datos personales; es
          decir, del uso o usos que se dar&aacute; a la informaci&oacute;n
          recopilada.
				</p>
				<h4>Per&iacute;odos de retenci&oacute;n de los datos personales</h4>
				<p>
          Los datos personales solo ser&aacute;n retenidos durante el tiempo
          m&iacute;nimo necesario para los fines de su tratamiento y, en todo
          caso, &uacute;nicamente durante el siguiente plazo: 2 a&ntilde;os, o
          hasta que el Usuario solicite su supresi&oacute;n.
				</p>
				<p>
          En el momento en que se obtengan los datos personales, se
          informar&aacute; al Usuario acerca del plazo durante el cual se
          conservar&aacute;n los datos personales o, cuando eso no sea posible,
          los criterios utilizados para determinar este plazo.
				</p>
				<h4>Destinatarios de los datos personales</h4>
				<p>
          Los datos personales del Usuario ser&aacute;n compartidos con los
          siguientes destinatarios o categor&iacute;as de destinatarios:
				</p>
				<p>Trivify.es</p>
				<p>Av. Europa 9&nbsp;</p>
				<p>29003 M&aacute;laga</p>
				<p>76433604G</p>
				<p>
          En caso de que el Responsable del tratamiento tenga la
          intenci&oacute;n de transferir datos personales a un tercer
          pa&iacute;s u organizaci&oacute;n internacional, en el momento en que
          se obtengan los datos personales, se informar&aacute; al Usuario
          acerca del tercer pa&iacute;s u organizaci&oacute;n internacional al
          cual se tiene la intenci&oacute;n de transferir los datos, as&iacute;
          como de la existencia o ausencia de una decisi&oacute;n de
          adecuaci&oacute;n de la Comisi&oacute;n.
				</p>
				<h4>Datos personales de menores de edad</h4>
				<p>
          Respetando lo establecido en los art&iacute;culos 8 del RGPD y 7 de la
          Ley Org&aacute;nica 3/2018, de 5 de diciembre, de Protecci&oacute;n de
          Datos Personales y garant&iacute;a de los derechos digitales, solo los
          mayores de 14 a&ntilde;os podr&aacute;n otorgar su consentimiento para
          el tratamiento de sus datos personales de forma l&iacute;cita por
          Trivify. Si se trata de un menor de 14 a&ntilde;os, ser&aacute;
          necesario el consentimiento de los padres o tutores para el
          tratamiento, y este solo se considerar&aacute; l&iacute;cito en la
          medida en la que los mismos lo hayan autorizado.
				</p>
				<h4>Secreto y seguridad de los datos personales</h4>
				<p>
          Trivify se compromete a adoptar las medidas t&eacute;cnicas y
          organizativas necesarias, seg&uacute;n el nivel de seguridad adecuado
          al riesgo de los datos recogidos, de forma que se garantice la
          seguridad de los datos de car&aacute;cter personal y se evite la
          destrucci&oacute;n, p&eacute;rdida o alteraci&oacute;n accidental o
          il&iacute;cita de datos personales transmitidos, conservados o
          tratados de otra forma, o la comunicaci&oacute;n o acceso no
          autorizados a dichos datos.
				</p>
				<p>
          El Sitio Web cuenta con un certificado SSL (Secure Socket Layer), que
          asegura que los datos personales se transmiten de forma segura y
          confidencial, al ser la transmisi&oacute;n de los datos entre el
          servidor y el Usuario, y en retroalimentaci&oacute;n, totalmente
          cifrada o encriptada.
				</p>
				<p>
          Sin embargo, debido a que Trivify no puede garantizar la
          inexpugabilidad de internet ni la ausencia total de hackers u otros
          que accedan de modo fraudulento a los datos personales, el Responsable
          del tratamiento se compromete a comunicar al Usuario sin
          dilaci&oacute;n indebida cuando ocurra una violaci&oacute;n de la
          seguridad de los datos personales que sea probable que entra&ntilde;e
          un alto riesgo para los derechos y libertades de las personas
          f&iacute;sicas. Siguiendo lo establecido en el art&iacute;culo 4 del
          RGPD, se entiende por violaci&oacute;n de la seguridad de los datos
          personales toda violaci&oacute;n de la seguridad que ocasione la
          destrucci&oacute;n, p&eacute;rdida o alteraci&oacute;n accidental o
          il&iacute;cita de datos personales transmitidos, conservados o
          tratados de otra forma, o la comunicaci&oacute;n o acceso no
          autorizados a dichos datos.
				</p>
				<p>
          Los datos personales ser&aacute;n tratados como confidenciales por el
          Responsable del tratamiento, quien se compromete a informar de y a
          garantizar por medio de una obligaci&oacute;n legal o contractual que
          dicha confidencialidad sea respetada por sus empleados, asociados, y
          toda persona a la cual le haga accesible la informaci&oacute;n.
				</p>
				<h4>Derechos derivados del tratamiento de los datos personales</h4>
				<p>
          El Usuario tiene sobre Trivify y podr&aacute;, por tanto, ejercer
          frente al Responsable del tratamiento los siguientes derechos
          reconocidos en el RGPD y la Ley Org&aacute;nica 3/2018, de 5 de
          diciembre, de Protecci&oacute;n de Datos Personales y garant&iacute;a
          de los derechos digitales:
				</p>
				<ul>
					<li>
						<em>Derecho de acceso:</em>&nbsp;Es el derecho del Usuario a obtener
            confirmaci&oacute;n de si Trivify est&aacute; tratando o no sus
            datos personales y, en caso afirmativo, obtener informaci&oacute;n
            sobre sus datos concretos de car&aacute;cter personal y del
            tratamiento que Trivify haya realizado o realice, as&iacute; como,
            entre otra, de la informaci&oacute;n disponible sobre el origen de
            dichos datos y los destinatarios de las comunicaciones realizadas o
            previstas de los mismos.
					</li>
					<li>
						<em>Derecho de rectificaci&oacute;n:</em>&nbsp;Es el derecho del
            Usuario a que se modifiquen sus datos personales que resulten ser
            inexactos o, teniendo en cuenta los fines del tratamiento,
            incompletos.
					</li>
					<li>
						<em
						>Derecho de supresi&oacute;n (&laquo;el derecho al
              olvido&raquo;):</em
						>&nbsp;Es el derecho del Usuario, siempre que la legislaci&oacute;n
            vigente no establezca lo contrario, a obtener la supresi&oacute;n de
            sus datos personales cuando estos ya no sean necesarios para los
            fines para los cuales fueron recogidos o tratados; el Usuario haya
            retirado su consentimiento al tratamiento y este no cuente con otra
            base legal; el Usuario se oponga al tratamiento y no exista otro
            motivo leg&iacute;timo para continuar con el mismo; los datos
            personales hayan sido tratados il&iacute;citamentemente; los datos
            personales deban suprimirse en cumplimiento de una obligaci&oacute;n
            legal; o los datos personales hayan sido obtenidos producto de una
            oferta directa de servicios de la sociedad de la informaci&oacute;n
            a un menor de 14 a&ntilde;os. Adem&aacute;s de suprimir los datos,
            el Responsable del tratamiento, teniendo en cuenta la
            tecnolog&iacute;a disponible y el coste de su aplicaci&oacute;n,
            deber&aacute; adoptar medidas razonables para informar a los
            responsables que est&eacute;n tratando los datos personales de la
            solicitud del interesado de supresi&oacute;n de cualquier enlace a
            esos datos personales.
					</li>
					<li>
						<em>Derecho a la limitaci&oacute;n del tratamiento:</em>&nbsp;Es el
            derecho del Usuario a limitar el tratamiento de sus datos
            personales. El Usuario tiene derecho a obtener la limitaci&oacute;n
            del tratamiento cuando impugne la exactitud de sus datos personales;
            el tratamiento sea il&iacute;cito; el Responsable del tratamiento ya
            no necesite los datos personales, pero el Usuario lo necesite para
            hacer reclamaciones; y cuando el Usuario se haya opuesto al
            tratamiento.
					</li>
					<li>
						<em>Derecho a la portabilidad de los datos:</em>&nbsp;En caso de que
            el tratamiento se efect&uacute;e por medios automatizados, el
            Usuario tendr&aacute; derecho a recibir del Responsable del
            tratamiento sus datos personales en un formato estructurado, de uso
            com&uacute;n y lectura mec&aacute;nica, y a transmitirlos a otro
            responsable del tratamiento. Siempre que sea t&eacute;cnicamente
            posible, el Responsable del tratamiento transmitir&aacute;
            directamente los datos a ese otro responsable.
					</li>
					<li>
						<em>Derecho de oposici&oacute;n:</em>&nbsp;Es el derecho del Usuario
            a que no se lleve a cabo el tratamiento de sus datos de
            car&aacute;cter personal o se cese el tratamiento de los mismos por
            parte de Trivify.
					</li>
					<li>
						<em
						>Derecho a no ser a no ser objeto de una decisi&oacute;n basada
              &uacute;nicamente en el tratamiento automatizado, incluida la
              elaboraci&oacute;n de perfiles:</em
						>&nbsp;Es el derecho del Usuario a no ser objeto de una
            decisi&oacute;n individualizada basada &uacute;nicamente en el
            tratamiento automatizado de sus datos personales, incluida la
            elaboraci&oacute;n de perfiles, existente salvo que la
            legislaci&oacute;n vigente establezca lo contrario.
					</li>
				</ul>
				<p>
          As&iacute; pues, el Usuario podr&aacute; ejercitar sus derechos
          mediante comunicaci&oacute;n escrita dirigida al Responsable del
          tratamiento con la referencia &laquo;RGPD-www.trivify.es&raquo;,
          especificando:
				</p>
				<ul>
					<li>
            Nombre, apellidos del Usuario y copia del DNI. En los casos en que
            se admita la representaci&oacute;n, ser&aacute; tambi&eacute;n
            necesaria la identificaci&oacute;n por el mismo medio de la persona
            que representa al Usuario, as&iacute; como el documento acreditativo
            de la representaci&oacute;n. La fotocopia del DNI podr&aacute; ser
            sustituida, por cualquier otro medio v&aacute;lido en derecho que
            acredite la identidad.
					</li>
					<li>
            Petici&oacute;n con los motivos espec&iacute;ficos de la solicitud o
            informaci&oacute;n a la que se quiere acceder.
					</li>
					<li>Domicilio a efecto de notificaciones.</li>
					<li>Fecha y firma del solicitante.</li>
					<li>Todo documento que acredite la petici&oacute;n que formula.</li>
				</ul>
				<p>
          Esta solicitud y todo otro documento adjunto podr&aacute; enviarse a
          la siguiente direcci&oacute;n y/o correo electr&oacute;nico:
				</p>
				<p>Direcci&oacute;n postal: Avenida Europa</p>
				<p>Correo electr&oacute;nico: info@trivify.es</p>
				<h4>Enlaces a sitios web de terceros</h4>
				<p>
          El Sitio Web puede incluir hiperv&iacute;nculos o enlaces que permiten
          acceder a p&aacute;ginas web de terceros distintos de Trivify, y que
          por tanto no son operados por Trivify. Los titulares de dichos sitios
          web dispondr&aacute;n de sus propias pol&iacute;ticas de
          protecci&oacute;n de datos, siendo ellos mismos, en cada caso,
          responsables de sus propios ficheros y de sus propias pr&aacute;cticas
          de privacidad.
				</p>
				<h4>Reclamaciones ante la autoridad de control</h4>
				<p>
          En caso de que el Usuario considere que existe un problema o
          infracci&oacute;n de la normativa vigente en la forma en la que se
          est&aacute;n tratando sus datos personales, tendr&aacute; derecho a la
          tutela judicial efectiva y a presentar una reclamaci&oacute;n ante una
          autoridad de control, en particular, en el Estado en el que tenga su
          residencia habitual, lugar de trabajo o lugar de la supuesta
          infracci&oacute;n. En el caso de Espa&ntilde;a, la autoridad de
          control es la Agencia Espa&ntilde;ola de Protecci&oacute;n de Datos
          (http://www.agpd.es).
				</p>
				<h3>
          II. ACEPTACI&Oacute;N Y CAMBIOS EN ESTA POL&Iacute;TICA DE PRIVACIDAD
				</h3>
				<p>
          Es necesario que el Usuario haya le&iacute;do y est&eacute; conforme
          con las condiciones sobre la protecci&oacute;n de datos de
          car&aacute;cter personal contenidas en esta Pol&iacute;tica de
          Privacidad, as&iacute; como que acepte el tratamiento de sus datos
          personales para que el Responsable del tratamiento pueda proceder al
          mismo en la forma, durante los plazos y para las finalidades
          indicadas. El uso del Sitio Web implicar&aacute; la aceptaci&oacute;n
          de la Pol&iacute;tica de Privacidad del mismo.
				</p>
				<p>
          Trivify se reserva el derecho a modificar su Pol&iacute;tica de
          Privacidad, de acuerdo a su propio criterio, o motivado por un cambio
          legislativo, jurisprudencial o doctrinal de la Agencia Espa&ntilde;ola
          de Protecci&oacute;n de Datos. Los cambios o actualizaciones de esta
          Pol&iacute;tica de Privacidad no ser&aacute;n notificados de forma
          expl&iacute;cita al Usuario. Se recomienda al Usuario consultar esta
          p&aacute;gina de forma peri&oacute;dica para estar al tanto de los
          &uacute;ltimos cambios o actualizaciones.
				</p>
				<p>
          Esta Pol&iacute;tica de Privacidad fue actualizada para adaptarse al
          Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27
          de abril de 2016, relativo a la protecci&oacute;n de las personas
          f&iacute;sicas en lo que respecta al tratamiento de datos personales y
          a la libre circulaci&oacute;n de estos datos (RGPD) y a la Ley
          Org&aacute;nica 3/2018, de 5 de diciembre, de Protecci&oacute;n de
          Datos Personales y garant&iacute;a de los derechos digitales.
				</p>
			</div>
 
		</>
	)
}

export default Games
