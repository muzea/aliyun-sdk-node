export interface ModifyCollationTimeZoneRequest {
    /**
     * 实例ID。
     * @example `rm-bp15qi0nd1u27****`
     */
    "DBInstanceId": string;
    /**
     * 系统字符集排序规则，默认为不修改。取值：
     * * **Chinese_PRC_CI_AS**
     * * **Chinese_PRC_CS_AS**
     * * **Chinese_PRC_BIN**
     * * **Latin1_General_CI_AS**
     * * **Latin1_General_CS_AS**
     * * **SQL_Latin1_General_CP1_CI_AS**
     * * **SQL_Latin1_General_CP1_CS_AS**
     * * **Japanese_CI_AS**
     * * **Japanese_CS_AS**
     * * **Chinese_Taiwan_Stroke_CI_AS**
     * * **Chinese_Taiwan_Stroke_CS_AS**
     * > - 实例默认的字符集排序规则为**Chinese_PRC_CI_AS**。
     * > - **Collation**与**Timezone**必须传入至少一个。
     * @example `Chinese_PRC_CS_AS`
     */
    "Collation"?: string;
    /**
     * 系统时区，默认为不修改。
     * > - 实例默认的时区为**China Standard Time**。
     * > - **Collation**与**Timezone**必须传入至少一个。
     * @example `China Standard Time`
     */
    "Timezone"?: string;
}
