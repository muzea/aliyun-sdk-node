export interface ModifyAppInstanceGroupAttributeRequest {
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId": string;
    /**
     * 交付组名称。
     * @example `办公应用`
     */
    "AppInstanceGroupName"?: string;
    /**
     * 会话断连保留时长，单位为分钟。终端用户会话断开连接后，会话将保留此处设置的时长，然后再注销。如果始终保留，则填写`-1`。取值范围：-1和3~300。默认值为`15`。
     * @example `15`
     */
    "SessionTimeout"?: number;
    /**
     * 资源组对象。
     */
    "NodePool"?: {
        /**
         * 资源组ID。
         * @example `rg-ew7va2g1wl3vm****`
         */
        NodePoolId: string;
        /**
         * 并发会话数，即单个资源可同时连接的会话数。如果同时连接的会话数过多，可能导致应用的使用体验下降。取值范围因资源规格不同而不同。各资源规格对应的取值范围分别是：
         * - appstreaming.general.4c8g：1\~2；
         * - appstreaming.general.8c16g：1\~4；
         * - appstreaming.vgpu.8c16g.4g：1\~4；
         * - appstreaming.vgpu.8c31g.16g：1\~4；
         * - appstreaming.vgpu.14c93g.12g：1\~6；
         * @example `2`
         */
        NodeCapacity: number;
    };
    /**
     * 存储策略。
     */
    "StoragePolicy"?: {
        /**
         * 存储类型列表。
         */
        StorageTypeList: string[];
    };
    /**
     * 安全策略。
     */
    "SecurityPolicy"?: {
        /**
         * 是否跳过用户授权校验。
         * @example `false`
         */
        SkipUserAuthCheck: boolean;
        /**
         * 解绑后是否重置。
         * @example `true`
         */
        ResetAfterUnbind: boolean;
    };
    /**
     * 预开模式。
     * @example `OFF`
     */
    "PreOpenMode"?: string;
    /**
     * 预开应用的AppId。如果`PreOpenMode`参数为`SINGLE_APP`，则`PreOpenAppId`不能为空字符串。
     * @example `ca-b2ronxxd****
    `
     */
    "PreOpenAppId"?: string;
    /**
     * 网络配置。
     * > 如需使用该参数，请提交工单。
     */
    "Network"?: {
        /**
         * 域名规则配置。
         */
        DomainRules: {
            /**
             * 域名。
             * @example `www.example.com`
             */
            Domain: string;
            /**
             * 策略值。
             * @example `block`
             */
            Policy: string;
        }[];
    };
}
