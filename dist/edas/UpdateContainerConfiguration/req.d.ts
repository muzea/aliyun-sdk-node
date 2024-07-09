export interface UpdateContainerConfigurationRequest {
    /**
     * 应用ID。
     * @example `c627c157-560d-43ff-************`
     */
    "AppId": string;
    /**
     * 分组ID。
     * - 如果ID不为空，则设置指定应用分组的Tomcat。
     * - 如果ID为“”，则设置应用的Tomcat。
     * @example `8123db90-880f-**************`
     */
    "GroupId"?: string;
    /**
     * Tomcat的ContextPath，支持空字符串、null-war包名称、ROOT-根目录或其他非空自定义字符串。
     * 支持英文字母、数字、 短划线（-）和下划线（_）。
     * - 应用分组不设置该参数，则使用应用配置。
     * - 应用不设置该参数，则使用根目录`/`。
     * @example `/`
     */
    "ContextPath"?: string;
    /**
     * 应用端口。
     * - 应用分组不设置该参数，则使用应用配置。
     * - 应用不设置该参数，则使用默认值8080。
     * @example `8080`
     */
    "HttpPort"?: number;
    /**
     * 最大线程数。
     * -  应用分组不设置该参数，则使用应用配置。
     * -  应用不设置该参数，使用默认值250。
     * @example `20`
     */
    "MaxThreads"?: number;
    /**
     * URI编码方式，支持ISO-8859-1、GBK、GB2312和UTF-8。
     * - 应用分组不设置该参数，则使用应用配置。
     * - 应用不设置该参数，则使用Tomcat默认值。
     * @example `ISO-8859-1`
     */
    "URIEncoding"?: string;
    /**
     * useBodyEncodingForURI是否启用。
     * - 应用分组不设置该参数，则使用应用配置。
     * - 应用不设置该参数，则使用默认值false。
     * @example `true`
     */
    "UseBodyEncoding"?: boolean;
}
