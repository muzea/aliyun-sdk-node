export interface CreateStandardGroupRequest {
    /**
     * 安全规则集名称。
     * @example `金融线-生产`
     */
    "GroupName": string;
    /**
     * 安全规则集描述。
     * @example `金融线生产环境实例规则`
     */
    "Description": string;
    /**
     * 实例引擎类型，取值请参见[DbType参数说明](~~198106~~)。
     * @example `mysql`
     */
    "DbType": string;
    /**
     * 租户ID。
     * @example `3000`
     */
    "Tid"?: number;
}
