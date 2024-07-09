export interface DescribeACLAttributeResponse {
    /**
     * 当前访问控制实例包含的总的访问控制规则条目数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 分页查询时每页展示的访问控制规则条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `8F62CE77-FBA2-4F8D-AED9-0A02814EDA69`
     */
    RequestId: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    PageNumber: number;
    Acrs: {
        /**
         * 当前访问控制实例包含的访问控制规则信息。
         */
        Acr: {
            /**
             * 访问控制规则应用方向。
             * - **in**：入方向，指从外部访问智能接入网关实例所在的本地分支的流量。
             * - **out**：出方向，指从智能接入网关实例所在的本地分支访问外部的流量。
             * @example `out`
             */
            Direction: string;
            /**
             * 访问控制规则类型：
             * - **LAN**：私网，表示针对私网地址的流量设置访问控制规则。
             * - **WAN**：公网，表示针对公网地址的流量设置访问控制规则。
             * @example `WAN`
             */
            Type: string;
            DpiSignatureIds: {
                DpiSignatureId: string[];
            };
            /**
             * 访问控制规则应用的协议。
             * 访问控制功能支持的协议类型，请以控制台为准。协议格式不区分大小写。
             * @example `UDP`
             */
            IpProtocol: string;
            /**
             * 访问控制规则优先级。
             * 取值范围：**1~100**。
             * @example `70`
             */
            Priority: number;
            /**
             * 访问控制实例ID。
             * @example `acl-7louazbja80bmg****`
             */
            AclId: string;
            /**
             * 访问控制规则授权策略：
             * - **accept**：允许。
             * - **drop**：拒绝。
             * @example `drop`
             */
            Policy: string;
            /**
             * 访问控制规则描述信息。
             * 描述长度为**1~512**个字符。
             * 此字段默认不会返回。可通过ModifyACLRule接口设置，设置后查询会正常返回。
             * @example `访问规则`
             */
            Description: string;
            /**
             * 创建访问控制规则时的时间戳。
             * 时间戳格式为Long型，优先级相同时，时间戳小的访问控制规则优先生效。
             * @example `1580821597000`
             */
            GmtCreate: number;
            /**
             * 目的网段。
             * 目的网段格式为CIDR格式。例如：192.168.10.0/24。
             * @example `0.0.0.0/0`
             */
            DestCidr: string;
            /**
             * 目的端口范围。
             * 取值范围：**-1**或**1**~**65535**。
             * 目的端口范围格式例如：1/200、80/80，其中-1/-1代表不限制端口。
             * @example `10000/20000`
             */
            DestPortRange: string;
            /**
             * 访问控制实例名称。
             * 长度为2~100个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
             * @example `doctest`
             */
            Name: string;
            /**
             * 访问控制规则ID。
             * @example `acr-gxzxj5w9qqdf1c****`
             */
            AcrId: string;
            /**
             * 源网段。
             * 源网段格式为CIDR格式。例如：192.168.1.0/24。
             * @example `0.0.0.0/0`
             */
            SourceCidr: string;
            /**
             * 源端口范围。
             * 取值范围：**-1**或**1**~**65535**。
             * 源端口范围格式例如：1/200、80/80，其中-1/-1代表不限制端口。
             * @example `30000/40000`
             */
            SourcePortRange: string;
            DpiGroupIds: {
                DpiGroupId: string[];
            };
            /**
             * 访问控制实例支持绑定的智能接入网关实例类型。取值：
             * - **acl-hardware**：智能接入网关硬件实例。
             * - **acl-software**：智能接入网关App实例。
             * @example `acl-hardware`
             */
            AclType: string;
        }[];
    };
}
