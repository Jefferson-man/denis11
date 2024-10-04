<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>
            <head>
                <title>Doctors List</title>
            </head>
            <body>
            <h3>Варіант 8</h3>
            <p>Інформація про графік роботи лікарів медичного центру:</p>
            <p>- Спеціалізація лікаря;</p>
            <p>- лікар:</p>
            <p>- прізвище,</p>
            <p>- ім'я,</p>
            <p>- по батькові,</p>
            <p>- Дні прийому;</p>
            <p>- час прийому щодня;</p>
            <p>- Номер кабінету.</p>
            <h2>UML</h2>
            <b>Photo:</b> <img src="/image/Foto7.png" alt="Doctor's Photo"/>
            <b>Photo:</b> <img src="/image/Foto8.png" alt="Doctor's Photo"/>
                <h1>Doctors Information</h1>
                <ul>
                    <xsl:for-each select="Doctors/Doctor">
                        <li>
                            <b>Specialization:</b> <xsl:value-of select="Specialization"/> <br/>
                            <b>Surname:</b> <xsl:value-of select="Surname"/> <br/>
                            <b>Firstname:</b> <xsl:value-of select="Firstname"/> <br/>
                            <b>Patronymic:</b> <xsl:value-of select="Patronymic"/> <br/>
                            <b>Days:</b> <xsl:value-of select="Days"/> <br/>
                            <b>Time:</b> <xsl:value-of select="Time"/> <br/>
                            <b>Room:</b> <xsl:value-of select="Room"/> <br/>
                        </li>
                        <br/>
                    </xsl:for-each>
                </ul>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
