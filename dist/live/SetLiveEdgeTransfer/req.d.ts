export interface SetLiveEdgeTransferRequest {
    /**
     * 推流域名。直播转推流以推流的DomainName为粒度设置。一个域名只能有一个直播转推配置。
     * @example `demo.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 直播流所属应用名称。支持正则表达式配置但有例外。详细信息，请参见下文中的**AppName与StreamName参数设置说明**。例如：liveApp****[1,2,3]，表示允许liveApp****1，liveApp****2，liveApp****3三个App转推。
     * >- 此参数只对请求参数中的TargetDomainList生效。-  使用正则表达式配置`AppName`参数值时不能使用^或$字符，否则会导致转推失败。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 推流名称。支持正则表达式配置但有例外。详细信息，请参见下文中的**AppName与StreamName参数设置说明**。例如：liveStream****[1,2,3]，表示允许liveStream****1，liveStream****2，liveStream****3三个流转推。
     * >- 此参数只对请求参数中的TargetDomainList生效。- 使用正则表达式配置`StreamName`参数值时不能使用^或$字符，否则会导致转推失败。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 用户指定的转推目标域名列表。多个域名用英文逗号（,）分隔。请求中必须带有`TargetDomainList`和`HttpsDns`两个参数中的一个，且二者互斥。
     * >- 当请求参数中设置了`TargetDomainList`，`AppName`和`StreamName`参数才生效。- 当请求参数中设置了`TargetDomainList`，则不能再设置`HttpsDns`参数。
     * @example `learn.aliyundoc.com,guide.aliyundoc.com`
     */
    "TargetDomainList"?: string;
    /**
     * 获取转推目标地址的HTTPDNS接口。请求中必须带有`TargetDomainList`和`HttpsDns`两个参数中的一个，且二者互斥。
     * > 若请求参数中设置了`HttpsDns`，则不能再设置`TargetDomainList`参数，且`AppName`和`StreamName`限制不生效。
     * 直播转推对HTTPDNS接口返回的消息结构有要求，详细信息，请参见下文中的**HTTPDNS说明**。
     * @example `http://developer.aliyundoc.com`
     */
    "HttpDns"?: string;
    /**
     * 推流参数是否透传。取值：
     * - **yes**：推流参数透传。
     * - **no**（默认值）：推流参数不透传。
     * @example `yes`
     */
    "TransferArgs"?: string;
}
