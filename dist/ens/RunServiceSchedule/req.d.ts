export interface RunServiceScheduleRequest {
    /**
     * 应用ID
     * @example `474bdef0-d149-4695-abfb-52912d9143f0`
     */
    "AppId": string;
    /**
     * 设备UUID
     * @example `hdm_d4f1059a8e1afc0956bd71b497faa433`
     */
    "Uuid": string;
    /**
     * 客户端的IP地址。
     * @example `180.166.45.146`
     */
    "ClientIp": string;
    /**
     * 调度服务操作。枚举类型，取值范围：
     * 容器化场景：
     * - Start：选择并激活一个可调度云设备，启动服务
     * - Stop：结束并释放云设备
     * - Console：Uuid处于调度中状态时，进行命令交互
     * 裸金属/虚机场景：
     *
     * - PreSchedule：预调度并锁定虚机实例
     * - Confirm：确认调度
     * - Cancel：取消调度
     * - Console：Uuid处于调度中状态时，进行命令交互
     * @example `Start`
     */
    "ServiceAction": string;
    /**
     * 无效参数
     * @example `android`
     */
    "PodConfigName"?: string;
    /**
     * 锁定空闲设备的时间上限，单位秒，仅ServiceAction=PreSchedule有效。默认300。
     * @example `300`
     */
    "PreLockedTimeout"?: number;
    /**
     * 需要挂载的用户数据文件的目录列表。必须是全路径，不支持'/../'，取值示例： ["/data/app01", "/data/user"]。
     * 注意：输入的目录路径是虚拟设备"/data"目录的相对目录，即实际对应的虚拟设备路径为"/data/{输入路径}"
     * @example `[\"/data/app01\", \"/data/user\"]`
     */
    "Directorys"?: string;
    /**
     * 容器服务命令列表。Json数组格式的字符串。
     * @example `[{\"containerName\": \"android\",       \"commands\":[\"cat /tmp/token.json\"]    },    {      \"commands\":[\"ls -l /data/data\"]    }]`
     */
    "ServiceCommands"?: string;
    /**
     * 设备调度策略。Json格式的字符串。
     * @example `{\"selectLevel\": \"RegionId\", \"values\": [\"cn-chengdu-telecom-2\"]  }`
     */
    "ScheduleStrategy"?: string;
}
