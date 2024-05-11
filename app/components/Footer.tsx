"use client"

export default function Footer() {
    return(
        <div className="text-center text-sm mt-12 p-4 border-t-2 border-slate-300">
           <ul className="flex justify-center flex-wrap">
                <li>Datenschutzeinstellungen ändern</li>
                <li>Datenschutzerklärung</li>
            </ul>
            <ul className="flex justify-center flex-wrap gap-4">
                <li>Impressum</li>
                <li>Kontakt</li>
            </ul>
            <p className="p-4">@ 2024 Marian Nökel</p>
        </div>
    )
}