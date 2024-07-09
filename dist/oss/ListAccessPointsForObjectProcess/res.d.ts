export interface ListAccessPointsForObjectProcessResponse {
    /**
     * 保存本次列举对象FC接入点信息结果的容器。
     */
    ListAccessPointsForObjectProcessResult: {
        /**
         * 请求中返回的结果是否被截断。返回值如下：
         * - true：表示本次未返回全部结果。
         * - false：表示本次已返回全部结果。
         * @example `true`
         */
        IsTruncated: boolean;
        /**
         * 表明本次ListAccessPointsForObjectProcess请求包含后续结果，需要将NextContinuationToken指定为continuation-token继续获取结果。
         * @example `abc`
         */
        NextContinuationToken: string;
        /**
         * 对象FC接入点所属的阿里云账号UID。
         * @example `111933544165****`
         */
        AccountId: string;
        /**
         * 保存所有对象FC接入点信息的容器。
         */
        AccessPointsForObjectProcess: {
            /**
             * 保存单个对象FC接入点信息的容器。
             */
            AccessPointForObjectProcess: {
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
                 * @example `fc-01`
                 */
                AccessPointName: string;
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
                 * 是否允许匿名访问。
                 * > 开启该选项之后将会允许匿名账号通过ObjectFC接入点访问您的Bucket，会产生相关费用。
                 * @example `false`
                 */
                AllowAnonymousAccessForObjectProcess: string;
            }[];
        };
    };
}
