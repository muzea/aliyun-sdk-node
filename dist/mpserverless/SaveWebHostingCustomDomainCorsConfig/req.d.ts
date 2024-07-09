export interface SaveWebHostingCustomDomainCorsConfigRequest {
    /**
     * 服务空间ID
     * @example `226e5213-697c-4a52-b4ff-35a09f8*****`
     */
    "SpaceId": string;
    /**
     * 域名。
     * @example `www.example.com`
     */
    "DomainName": string;
    /**
     * 设置是否开启跨域功能，取值为：
     * - true：开启跨域功能。
     * - false：不开启跨域功能。
     * @example `true`
     */
    "EnableCors": boolean;
    /**
     * 设置跨域校验规则，默认为“*”，跨域校验规则为：
     * - 设置为“*”，不论用户请求里面是否携带“Origin”参数，也不论携带的“Origin”参数为何值，都固定返回“Access-Control-Allow-Origin:\*”。
     * - 跨域资源共享的响应头值设置了单个或者多个值（多个值之间用“,”分隔）。
     *     - 如果用户请求头里携带的“Origin”参数值与被设置的任意一个值精确匹配，就会响应对应的跨域头。
     *     - 如果都没有精确匹配上，则不响应跨域头。
     * - 设置为通配符域名，则会校验请求头中Origin值是否能匹配上
     * @example `https://*.example.com, https://*.example.org`
     */
    "AccessControlAllowOrigin"?: string;
    /**
     * 当开启跨域检查后，是否检查Origin字段。
     * - true: 只有在校验通过后才会返回跨域头；
     * - false: 不检查Origin字段，固定返回配置的跨域头；
     * 可选值，默认为true。只有在开启跨域功能后该字段才有作用。
     * @example `true`
     */
    "AccessOriginControl"?: boolean;
}
