<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
        <head>
            <title>Графік роботи лікарів</title>
        </head>
        <body>
            <h2>Графік роботи лікарів</h2>
            <div id="output">
                <table border="1">
                    <tr bgcolor="#9acd32">
                        <th>Спеціалізація</th>
                        <th>Прізвище</th>
                        <th>Ім'я</th>
                        <th>По батькові</th>
                        <th>Дні прийому</th>
                        <th>Час прийому</th>
                        <th>Номер кабінету</th>
                    </tr>
                    <xsl:for-each select="Doctors/Doctor">
                        <xsl:if test="contains(Days, $selectedDay) or $selectedDay = ''">
                            <tr>
                                <td><xsl:value-of select="Specialization"/></td>
                                <td><xsl:value-of select="Surname"/></td>
                                <td><xsl:value-of select="Firstname"/></td>
                                <td><xsl:value-of select="Patronymic"/></td>
                                <td><xsl:value-of select="Days"/></td>
                                <td><xsl:value-of select="Time"/></td>
                                <td><xsl:value-of select="Room"/></td>
                            </tr>
                        </xsl:if>
                    </xsl:for-each>
                </table>
            </div>
        </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
