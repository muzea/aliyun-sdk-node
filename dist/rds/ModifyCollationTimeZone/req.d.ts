interface ModifyCollationTimeZoneRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 系统字符集排序规则，取值：
    * * **Latin1_General_CI_AS**
    * * **Latin1_General_CS_AS**
    * * **SQL_Latin1_General_CP1_CI_AS**
    * * **SQL_Latin1_General_CP1_CS_AS**
    * * **Chinese_PRC_CS_AS**
    * * **Chinese_PRC_BIN**
    * * **Chinese_PRC_CI_AS**
    * * **Japanese_CI_AS**
    * * **Japanese_CS_AS**
    * * **Chinese_Taiwan_Stroke_CI_AS**
    * * **Chinese_Taiwan_Stroke_CS_AS**
    * 默认为不修改。
    * >**Collation**与**Timezone**必须传入至少一个。
    * @example `Latin1_General_CI_AS`
    */ "Collation"?: string;
    /**
    * 系统时区，默认为不修改。
    * >**Collation**与**Timezone**必须传入至少一个。
    * @example `China Standard Time`
    */ "Timezone"?: string;
}
export { ModifyCollationTimeZoneRequest };