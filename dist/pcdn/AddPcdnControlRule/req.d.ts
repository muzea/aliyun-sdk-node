export interface AddPcdnControlRuleRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 规则名称。
     * @example `TEST+RULE`
     */
    "Name": string;
    /**
     * 地区列表代码，使用竖线（|）分隔。
     * @example `cn-hangzhou`
     */
    "Region": string;
    /**
     * 运营商英文名，多个使用竖线（|）分隔。
     * @example `mobile`
     */
    "IspName": string;
    /**
     * 终端类型代码，使用竖线（|）分隔。
     * @example `01`
     */
    "PlatformType": string;
    /**
     * 业务类型：**live**、**vod**、**download**。
     * @example `live`
     */
    "BusinessType": string;
    /**
     * 市场。
     * @example `all`
     */
    "Market": string;
    /**
     * 应用版本。
     * @example `all`
     */
    "AppVersion": string;
}
