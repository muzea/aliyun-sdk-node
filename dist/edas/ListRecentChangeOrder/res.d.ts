export interface ListRecentChangeOrderResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `D16979DC-4D42-************`
     */
    RequestId: string;
    ChangeOrderList: {
        /**
         * 变更记录列表。
         */
        ChangeOrder: {
            /**
             * 变更流程状态。
             * - 0：准备开始执行
             * - 1：执行中
             * - 2：执行成功
             * - 3：执行失败
             * - 6：执行终止
             * - 8：等待手工确认（手工分批的时候能看到）
             * - 9：等待自动执行
             * - 10：由于系统错误而失败
             * @example `2`
             */
            Status: number;
            /**
             * 结束时间。
             * @example `2019-11-13 14:24:02`
             */
            FinishTime: string;
            /**
             * 创建时间。
             * @example `2019-11-13 14:23:46`
             */
            CreateTime: string;
            /**
             * 创建变更流程用户ID。
             * @example `1432536****`
             */
            UserId: string;
            /**
             * 变更流程描述信息。
             * @example `版本：2020-05-14 20:02:33 | 包名：hsf-pandora-boot-provider-1.0.jar | 部署目标：所有分组`
             */
            ChangeOrderDescription: string;
            /**
             * 变更来源。
             * - console：EDAS控制台
             * - pop：POP API或工具
             * @example `pop`
             */
            Source: string;
            /**
             * 分批次数。最少1批，最多5批。
             * @example `1`
             */
            BatchCount: number;
            /**
             * 创建变更单的用户。
             * @example `edas_test1@aliyun-test.com`
             */
            CreateUserId: string;
            /**
             * 变更流程类型：
             * - CoCreateApp：创建应用。
             * - CoStartApplication：启动应用。
             * - CoStopApplication：停止应用。
             * - CoRestartApplication：重启应用。
             * - CoDeleteApp：删除应用。
             * - CoStart：启动应用实例。
             * - CoStop：停止应用实例。
             * - CoRestart：重启实例。
             * - CoDeploy：部署应用。
             * - CoReset：重置应用实例。
             * - CoRollback：回滚应用。
             * - CoScaleIn：缩容应用实例。
             * - CoScaleOut：扩容应用实例。
             * - CoChangeGroup：更改应用实例分组。
             * - CoUpdateContainer：更新应用部署包版本。
             * - CoBindSlb：绑定SLB。
             * - CoBindECSSlb：绑定ECS SLB。
             * - CoUnbindECSSlb：解绑ECS SLB。
             * - CoUnbindSlb：解绑SLB。
             * - CoModifySlb：配置SLB。
             * - CoModifyConfig：修改应用配置。
             * - CoClusterScaleOut：集群扩容。
             * - CoRescaleApplicationVertically：垂直扩缩容。
             * @example `CoDeploy`
             */
            CoTypeCode: string;
            /**
             * 变更流程唯一标识ID。
             * @example `1074f3e2-e974-4a0e-****-************`
             */
            ChangeOrderId: string;
            /**
             * 分批发布时下一批变更的执行方式。
             * - Automatic：自动
             * - Manual：手动
             * @example `Automatic`
             */
            BatchType: string;
            /**
             * 变更的应用分组ID。
             * @example `8123db90-880f-486f-****-************`
             */
            GroupId: string;
            /**
             * 变更流程类型。
             * @example `Application Scale Out`
             */
            CoType: string;
            /**
             * 应用ID。
             * @example `3616cdca-4f92-4413-****-************`
             */
            AppId: string;
        }[];
    };
}
