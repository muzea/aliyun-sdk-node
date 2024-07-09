export interface DeleteWorkspaceResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `3AA3469E-9CB3-08CB-AA0E-A6F26B4CCB93`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 生产空间ID。
         * @example `78`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1634262448874`
         */
        GmtCreate: number;
        /**
         * 生产空间名称。
         * @example `wyqtest`
         */
        Name: string;
        /**
         * 生产空间描述。
         * @example `wyqtest`
         */
        Description: string;
        /**
         * 生产空间类型。取值如下：
         * - COMMON_CLASSIFY：通用分类
         * - COMMON_DETECT：通用检测
         * - COMMON_INSTANCE_SEGMENT：通用实例分割
         * @example `COMMON_CLASSIFY`
         */
        Type: string;
    };
}
