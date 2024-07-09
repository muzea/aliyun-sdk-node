export interface GetAccessPointForObjectProcessResponse {
    /**
     * 保存对象FC接入点信息的容器。
     */
    GetAccessPointForObjectProcessResult: {
        /**
         * 对象FC接入点名称。
         * @example `fc-ap-01`
         */
        AccessPointNameForObjectProcess: string;
        /**
         * 对象FC接入点别名。
         * @example `fc-ap-01-3b00521f653d2b3223680ec39dbbe2****-opapalias`
         */
        AccessPointForObjectProcessAlias: string;
        /**
         * 接入点名称。
         * @example `ap-01`
         */
        AccessPointName: string;
        /**
         * 配置对象FC接入点的阿里云账号UID。
         * @example `111933544165****`
         */
        AccountId: string;
        /**
         * 对象FC接入点ARN。
         * @example `acs:oss:cn-qingdao:119335441657143:accesspointforobjectprocess/fc-ap-01`
         */
        AccessPointForObjectProcessArn: string;
        /**
         * 对象FC接入点创建时间，格式为时间戳。
         * @example `1626769503`
         */
        CreationDate: string;
        /**
         * 对象FC接入点所处状态。返回值如下：
         * - enable：对象FC接入点已创建完成。
         * - disable：对象FC接入点已禁用。
         * - creating：对象FC接入点正在创建中。
         * - deleting：对象FC接入点已删除。
         * @example `enable`
         */
        Status: string;
        /**
         * 保存对象FC接入点访问域名信息的容器。
         */
        Endpoints: {
            /**
             * 对象FC接入点的外网Endpoint。
             * @example `fc-ap-01-111933544165****.oss-cn-qingdao.oss-object-process.aliyuncs.com`
             */
            PublicEndpoint: string;
            /**
             * 对象FC接入点的内网Endpoint。
             * @example `fc-ap-01-111933544165****.oss-cn-qingdao-internal.oss-object-process.aliyuncs.com`
             */
            InternalEndpoint: string;
        };
        /**
         * 是否允许匿名访问。
         * > 开启该选项之后将会允许匿名账号通过ObjectFC接入点访问您的Bucket，会产生相关费用。
         * @example `false`
         */
        AllowAnonymousAccessForObjectProcess: string;
        /**
         * 保存阻止公共访问信息的容器。
         */
        PublicAccessBlockConfiguration: any;
    };
}
