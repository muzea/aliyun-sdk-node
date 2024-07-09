export interface GetHostGroupResponse {
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
    hostGroup: {
        /**
         * 创建者阿里云账号id
         * @example `111111`
         */
        creatorAccountId: string;
        /**
         * 更新时间
         * @example `1586863220000`
         */
        upateTIme: number;
        /**
         * 主机数
         * @example `1`
         */
        hostNum: number;
        /**
         * 修改者阿里云账号id
         * @example `11111`
         */
        modifierAccountId: string;
        /**
         * 主机组描述
         * @example `主机组描述`
         */
        description: string;
        /**
         * 主机组类型
         * @example `ECS`
         */
        type: string;
        /**
         * 创建时间
         * @example `1586863220000`
         */
        createTime: number;
        /**
         * ecs类型，暂只支持ECS_ALIYUN
         * @example `ECS_ALIYUN`
         */
        ecsType: string;
        /**
         * 阿里云区域
         * @example `cn-bejing`
         */
        aliyunRegion: string;
        /**
         * ecs标签Key
         * @example `ecs`
         */
        ecsLabelKey: string;
        /**
         * 主机组id
         * @example `1234`
         */
        id: number;
        /**
         * 主机组名称
         * @example `主机组名称`
         */
        name: string;
        /**
         * 服务连接id
         * @example `1234`
         */
        serviceConnectionId: number;
        /**
         * 主机信息
         */
        hostInfos: {
            /**
             * 更新时间
             * @example `1586863220000`
             */
            updateTime: number;
            /**
             * 创建者阿里云账号
             * @example `11111`
             */
            creatorAccountId: string;
            /**
             * 主机名
             * @example `ceshi`
             */
            instanceName: string;
            /**
             * 修改者阿里云账号
             * @example `11111111111`
             */
            modifierAccountId: string;
            /**
             * 机器ip
             * @example `127.0.0.1`
             */
            ip: string;
            /**
             * 创建时间
             * @example `1586863220000`
             */
            createTime: number;
            /**
             * MachineInfo  值固定为 MachineInfo
             * @example `MachineInfo`
             */
            objectType: string;
            /**
             * 阿里云区域
             * @example `cn-hangzhou`
             */
            aliyunRegionId: string;
            /**
             * 机器sn
             * @example `1ssasa`
             */
            machineSn: string;
        }[];
        /**
         * ecs标签value
         * @example `ecs`
         */
        ecsLabelValue: string;
    };
}
