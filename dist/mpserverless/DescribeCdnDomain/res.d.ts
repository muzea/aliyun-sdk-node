export interface DescribeCdnDomainResponse {
    /**
     * 服务空间 ID。
     * @example `mp-65e6491b-****-4c2e-b202-7f0036eb2713`
     */
    SpaceId: string;
    /**
     * 请求ID。
     * @example `E8A2FA95-6F70-****-971C-34C27485441D`
     */
    RequestId: string;
    /**
     * - IN_SERVICE：CDN服务中。
     * - PAUSED：CDN已停止服务，请检查您的账户余额、套餐到期日或者资源用量是否超额。
     * @example `IN_SERVICE`
     */
    ServiceStatus: string;
    /**
     * CDN域名。
     * @example `mp-65e6491b-****-4c2e-b202-7f0036eb2713.cdn.bspapp.com`
     */
    DomainName: string;
    /**
     * 跨域配置。
     */
    CorsConfig: {
        /**
         * 设置跨域校验规则，默认为“*”，跨域校验规则为：
         * - 设置为“\*”，不论用户请求里面是否携带“Origin”参数，也不论携带的“Origin”参数为何值，都固定返回“Access-Control-Allow-Origin:*”。
         * - 跨域资源共享的响应头值设置了单个或者多个值（多个值之间用“,”分隔）。
         *   - 如果用户请求头里携带的“Origin”参数值与被设置的任意一个值精确匹配，就会响应对应的跨域头。
         *   - 如果都没有精确匹配上，则不响应跨域头。
         * - 设置为通配符域名，则会校验请求头中Origin值是否能匹配上。
         * @example `https://www.baidu.com`
         */
        AllowOrigin: string;
        /**
         * 配置ID。
         * @example `274436853071****`
         */
        ConfigId: string;
        /**
         * - true：开启跨域验证，每次请求都会检查是否符合跨域规则。
         * - false：不开启跨域校验，固定返回已配置的跨域头。
         * @example `true`
         */
        AccessOriginControl: boolean;
    };
    /**
     * 防盗链配置。
     */
    RefererConfig: {
        /**
         * - white： 白名单
         * - black： 黑名单
         * > 黑名单和白名单互斥，同一时间您只能选择其中一种方式。
         * @example `white`
         */
        Type: string;
        /**
         * 名单列表，多个用半角逗号（,）分隔。
         * > Referer防盗链规则的总长度最长不超过60 KB。
         * @example `a*b.example.com`
         */
        ReferList: string;
        /**
         * 是否允许空referer字段访问CDN资源。取值：
         * - on：允许。
         * - off（默认值）：禁止。
         * @example `on`
         */
        AllowEmpty: string;
        /**
         * 是否使用精确匹配模式，控制“名单列表”项中填写的域名是否为精确匹配。如果勾选（on）则精确匹配域名。
         * - 取值为on时：
         *   - 支持精确匹配。
         *     - 名单列表填写example.com，匹配example.com。
         *     -  名单列表填写a*b.example.com，匹配a<任意字符>b.example.com。
         *   - 不支持后缀匹配。
         * - 取值为off（默认值）时：
         *   -  不支持精确匹配。
         *   - 支持后缀匹配。
         *     - 名单列表填写example.com，匹配example.com和<任意字符>.example.com。
         *      - 名单列表填写a*b.example.com，匹配a<任意字符>b.example.com和<任意字符>.a<任意字符>b.example.com。
         * @example `a*b.example.com`
         */
        DisableAst: string;
        /**
         * 配置ID。
         * @example `28048528682****`
         */
        ConfigId: string;
    };
    /**
     * IP黑白名单配置。
     */
    IpConfig: {
        /**
         * - white： 白名单
         * - black： 黑名单
         * > 黑名单和白名单互斥，同一时间您只能选择其中一种方式。
         * @example `black`
         */
        Type: string;
        /**
         * - IP列表，多个用半角逗号（,）分隔。支持设置网段。
         * - 最多可配置约700个IPv6地址，2000个IPv4地址。
         * 更多参考：[IP地址校验模式](https://help.aliyun.com/document_detail/27138.htm#section-6dp-9h1-ty3)。
         * @example `183.157.108.82,140.205.147.26`
         */
        IpList: string;
        /**
         * 配置ID。
         * @example `25623800702****`
         */
        ConfigId: string;
    };
    /**
     * UA客户端标识黑白名单配置。
     */
    UaConfig: {
        /**
         * - white： 白名单
         * - black： 黑名单
         * > 黑名单和白名单互斥，同一时间您只能选择其中一种方式。
         * @example `white`
         */
        Type: string;
        /**
         * 填写User-Agent，支持通配符号*（匹配任意字符串）和多个值（多个值用|分割。例如：\*curl\*|\*IE\*|\*chrome\*|\*firefox\*）。
         * > 如果您需要对用户请求中携带了User-Agent请求头，但是值为空的情况做访问控制，您可以使用参数this-is-empty-ua来表示User-Agent值为空。
         * @example `*curl*|*IE*|*chrome*|*firefox*`
         */
        UaList: string;
        /**
         * 配置ID。
         * @example `25950108534****`
         */
        ConfigId: string;
    };
    /**
     * CDN鉴权配置，仅“FILE”模式下有效。
     */
    AuthConfig: {
        /**
         * 鉴权类型，枚举值：
         * - no_auth 当前未开启鉴权。
         * - type_a A方式鉴权。
         * - type_b B方式鉴权。
         * - ype_c C方式鉴权。
         * 更多参考：[鉴权方式及原理说明](https://help.aliyun.com/document_detail/85113.htm)。
         * @example `no_auth`
         */
        AuthType: string;
        /**
         * 鉴权秘钥，6~128位，用于计算鉴权签名。
         * @example `SL4ZB****`
         */
        AuthKey: string;
        /**
         * 鉴权默认有效时长（秒）。
         * @example `3600`
         */
        AuthDelta: number;
        /**
         * 配置ID。
         * @example `25950108534****
        `
         */
        configId: string;
    };
}
