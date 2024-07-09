export interface GetAccessPointConfigForObjectProcessResponse {
    /**
     * 保存对象FC接入点配置信息的容器。
     */
    GetAccessPointConfigForObjectProcessResult: {
        /**
         * 保存对象处理信息的容器。
         */
        ObjectProcessConfiguration: any;
        /**
         * 是否允许匿名访问。
         * @example `false`
         */
        AllowAnonymousAccessForObjectProcess: string;
        /**
         * 保存阻止公共访问信息的容器。
         */
        PublicAccessBlockConfiguration: any;
    };
}
