export interface EditPcdnControlRuleRequest {
    /**
     * 版本号。
     * @example `2017-04-11`
     */
    "Version": string;
    /**
     * 规则名称。
     * @example `TEST+RULE+EDIT`
     */
    "Name": string;
    /**
     * 启停规则资源。
     * @example `y6z7rp`
     */
    "ResourceId": string;
    /**
     * 地域列表代码，多个使用竖线（|）分隔。
     * 代码详情请参见[通用字段参考](~~151572~~)。
     * @example `67`
     */
    "Region": string;
    /**
     * 运营商英文名，使用竖线（|）分隔。
     * @example `mobile`
     */
    "IspName": string;
    /**
     * 终端类型代码，多个使用竖线（|）分隔。
     * 代码详情请参见[通用字段参考](~~151572~~)。
     * @example `01`
     */
    "PlatformType": string;
    /**
     * 业务类型：live、vod、download。
     * @example `live`
     */
    "BusinessType": string;
    /**
     * 市场，多个用竖线（|）分隔，全部填写all。
     * @example `APPStore`
     */
    "Market": string;
    /**
     * 应用版本，多个用竖线（|）分隔，修改全部填写all。
     * @example `9.27.3501`
     */
    "AppVersion": string;
}
