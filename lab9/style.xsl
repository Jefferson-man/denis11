<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/Doctors">
        <table>
            <tr>
                <th>Спеціалізація</th>
                <th>Прізвище</th>
                <th>Ім'я</th>
                <th>По батькові</th>
                <th>Дні прийому</th>
                <th>Час</th>
                <th>Кабінет</th>
            </tr>
            <xsl:apply-templates select="Doctor"/>
        </table>
    </xsl:template>
    <xsl:template match="Doctor">
        <tr>
            <td><xsl:value-of select="Specialization"/></td>
            <td><xsl:value-of select="Surname"/></td>
            <td><xsl:value-of select="Firstname"/></td>
            <td><xsl:value-of select="Patronymic"/></td>
            <td><xsl:value-of select="Days"/></td>
            <td><xsl:value-of select="Time"/></td>
            <td><xsl:value-of select="Room"/></td>
        </tr>
    </xsl:template>
</xsl:stylesheet>
