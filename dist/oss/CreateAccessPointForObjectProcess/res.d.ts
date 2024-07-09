export interface CreateAccessPointForObjectProcessResponse {
    /**
     * 保存对象FC接入点信息的容器。
     */
    CreateAccessPointForObjectProcessResult: {
        /**
         * 对象FC接入点ARN。
         * @example `acs:oss:cn-qingdao:119335441657143:accesspointforobjectprocess/fc-ap-01`
         */
        AccessPointForObjectProcessArn: string;
        /**
         * 对象FC接入点别名。
         * @example `fc-ap-01-3b00521f653d2b3223680ec39dbbe2****-opapalias`
         */
        AccessPointForObjectProcessAlias: string;
    };
}
