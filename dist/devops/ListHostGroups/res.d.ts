export interface ListHostGroupsResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `""`
     */
    errorMessage: string;
    /**
     * 错误码
     * @example `""`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: boolean;
    /**
     * 主机组
     */
    hostGroups: {
        /**
         * 创建人阿里云账号id
         * @example `2222222222222`
         */
        creatorAccountId: string;
        /**
         * 更新时间
         * @example `1586863220000`
         */
        updateTime: number;
        /**
         * 主机个数
         * @example `3`
         */
        hostNum: number;
        /**
         * 修改人阿里云账号id
         * @example `211111111`
         */
        modifierAccountId: string;
        /**
         * 描述
         * @example `主机组`
         */
        description: string;
        /**
         * 类型
         * @example `ECS`
         */
        type: string;
        /**
         * 主机时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * 主机类型
         * @example `ECS_ALIYUN`
         */
        ecsType: string;
        /**
         * 阿里云区域
         * @example `cn-beijing`
         */
        aliyunRegion: string;
        /**
         * ecs标签Key
         * @example `ecs`
         */
        ecsLabelKey: string;
        /**
         * 部署组名称
         * @example `部署组`
         */
        name: string;
        /**
         * 部署组Id
         * @example `444xxxx`
         */
        id: number;
        /**
         * 服务连接Id
         * @example `1212122`
         */
        serviceConnectionId: number;
        /**
         * Ecs标签值
         * @example `value`
         */
        ecsLabelValue: string;
    }[];
    /**
     * 总数
     * @example `50`
     */
    totalCount: number;
    /**
     * 分页token,空表示最后一页
     * @example `asassasassa`
     */
    nextToken: string;
}
