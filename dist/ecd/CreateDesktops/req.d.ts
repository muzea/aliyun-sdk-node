export interface CreateDesktopsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-boyczi8enfyc5****`
     */
    "GroupId"?: string;
    /**
     * 云电脑模板ID。
     * @example `b-je9hani001wfn****`
     */
    "BundleId"?: string;
    /**
     * 云电脑名称。命名规则如下：
     * - 不超过64个字符。
     * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
     * - 可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者短划线（-）。
     * @example `DemoComputer01`
     */
    "DesktopName"?: string;
    /**
     * > 此参数不开放使用。
     * @example `username`
     */
    "UserName"?: string;
    /**
     * > 此参数不开放使用。
     * @example `vpc-uf6w8u60n8xbkg5el****`
     */
    "VpcId"?: string;
    /**
     * 创建的云电脑数量。取值范围为1~300，默认值为1。
     * @example `1`
     */
    "Amount"?: number;
    /**
     * > 此参数不开放使用。
     * @example `cn-hangzhou+dir-300943****`
     */
    "DirectoryId"?: string;
    /**
     * 办公网络ID。
     * @example `cn-hangzhou+dir-387822****`
     */
    "OfficeSiteId"?: string;
    /**
     * 策略ID。
     * @example `system-all-enabled-policy`
     */
    "PolicyGroupId": string;
    /**
     * 云电脑的计费方式。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
    /**
     * 购买资源的时长。单位由`PeriodUnit`指定。当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。
     * - 如果`PeriodUnit`为`Month`，该参数的取值范围：
     *      - 1
     *     -  2
     *     - 3
     *     - 6
     * - 如果`PeriodUnit`为`Year`，该参数的取值范围：
     *     - 1
     *     - 2
     *     - 3
     *     - 4
     *     - 5
     * @example `1`
     */
    "Period"?: number;
    /**
     * 包年包月计费方式的时长单位。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 是否自动支付。
     * @example `false`
     */
    "AutoPay"?: boolean;
    /**
     * 是否自动续费。当参数`ChargeType`取值为`PrePaid`时才生效。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 优惠活动ID。
     * @example `23141`
     */
    "PromotionId"?: string;
    /**
     * 云电脑分配模式。
     * > 如果未设置`EndUserId`，创建的云电脑不会分配给用户。
     * @example `ALL`
     */
    "UserAssignMode"?: string;
    /**
     * 自定义设置云电脑的主机名称。仅支持设置AD办公网络下，操作系统类型是Windows的云电脑。
     * 主机名称的命名规则如下：
     * - 长度为2~15个字符。
     * - 支持大小写字母、数字或者短划线（-）。不能以短划线开头或者结尾，不能连续使用短划线，不能只使用数字。
     * 创建多台云电脑时，可以使用`name_prefix[begin_number,bits]name_suffix`的命名格式为多台云电脑统一命名。例如，设置Hostname的取值为ecd-[1,4]-test，则第一台云电脑主机名称为ecd-0001-test，第二台云电脑主机名称为ecd-0002-test，依次类推。
     * - ` name_prefix`：主机名称的前缀。
     * - ` [begin_number,bits]`：主机名称中的有序数字。`begin_number`为起始数字，取值支持0\~999999，默认值为0；`bits`为数字位数，取值支持1\~6，默认值为6。
     * -  `name_suffix`：主机名称的后缀。
     * @example `testhost`
     */
    "Hostname"?: string;
    /**
     * 为云电脑添加的授权用户ID列表。可设置1~100个。
     * @example `123456789`
     */
    "EndUserId"?: string[];
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 标签键。可设置1~20个。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。可设置1~20个。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 批量创建云电脑时，云电脑名称是否自动增加后缀。
     * @example `false`
     */
    "DesktopNameSuffix"?: boolean;
    /**
     * 是否开启磁盘加密。
     * @example `false`
     */
    "VolumeEncryptionEnabled"?: boolean;
    /**
     * 开启磁盘加密的情况下使用的KMS的密钥ID。可通过[ListKeys](~~28951~~)接口获取。
     * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
     */
    "VolumeEncryptionKey"?: string;
    /**
     * 指定云电脑私网IP。
     * @example `10.0.0.1`
     */
    "DesktopMemberIp"?: string;
    /**
     * 用户自定义命令脚本数据。
     */
    "UserCommands"?: {
        /**
         * 命令内容（CommandContent）的编码方式。
         * @example `Base64`
         */
        ContentEncoding: string;
        /**
         * 命令内容。
         * @example `bmV3LWl0ZW0gZDpcdGVzdF91c2VyX2NvbW1hbmRzLnR4dCAtdHlwZSBm****`
         */
        Content: string;
        /**
         * 命令的语言类型。
         * @example `RunPowerShellScript`
         */
        ContentType: string;
    }[];
    /**
     * 云电脑模板列表。
     */
    "BundleModels"?: {
        /**
         * 云电脑模板ID。
         * @example `b-je9hani001wfn****`
         */
        BundleId: string;
        /**
         * 创建的云电脑数量。取值范围为1~300，默认值为0。
         * @example `1`
         */
        Amount: number;
        /**
         * 云电脑分配用户列表。
         */
        EndUserIds: string[];
        /**
         * 云电脑名称。命名规则如下：
         * - 不超过64个字符。
         * - 必须以大小字母或中文开头，不能以`http://`和`https://`开头。
         * - 可以包含中文、英文、数字、半角冒号（:）、下划线（_）、点号（.）或者短划线（-）。
         * @example `DemoComputer02`
         */
        DesktopName: string;
        /**
         * 自定义设置云电脑的主机名称。仅支持设置AD办公网络下，操作系统类型是Windows的云电脑。
         * 主机名称的命名规则如下：
         * - 长度为2~15个字符。
         * - 支持大小写字母、数字或者短划线（-）。不能以短划线开头或者结尾，不能连续使用短划线，不能只使用数字。
         * 创建多台云电脑时，可以使用`name_prefix[begin_number,bits]name_suffix`的命名格式为多台云电脑统一命名。例如，设置Hostname的取值为ecd-[1,4]-test，则第一台云电脑主机名称为ecd-0001-test，第二台云电脑主机名称为ecd-0002-test，依次类推。
         * - ` name_prefix`：主机名称的前缀。
         * - ` [begin_number,bits]`：主机名称中的有序数字。`begin_number`为起始数字，取值支持0\~999999，默认值为0；`bits`为数字位数，取值支持1\~6，默认值为6。
         * -  `name_suffix`：主机名称的后缀。
         * @example `testhost`
         */
        Hostname: string;
        /**
         * 是否开启磁盘加密。
         * @example `false`
         */
        VolumeEncryptionEnabled: boolean;
        /**
         * 开启磁盘加密的情况下使用的KMS的密钥ID。可通过[ListKeys](~~28951~~)接口获取。
         * @example `08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****`
         */
        VolumeEncryptionKey: string;
    }[];
    /**
     * 云电脑定时任务详情。
     */
    "DesktopTimers"?: {
        /**
         * 定时任务类型。
         * @example `NoOperationReboot`
         */
        TimerType: string;
        /**
         * 定时任务Cron表达式。
         * ><notice>需要传入UTC标准时间，即北京时间每天0点应该传入0 0 16 ? * 1,2,3,4,5,6,7></notice>
         * @example `0 40 7 ? * 1,2,3,4,5,6,7`
         */
        CronExpression: string;
        /**
         * 时间间隔，单位为分钟。
         * @example `10`
         */
        Interval: number;
        /**
         * 是否强制执行。
         * @example `True`
         */
        Enforce: boolean;
        /**
         * 云电脑重置类型。
         * @example `RESET_TYPE_SYSTEM`
         */
        ResetType: string;
        /**
         * 定时任务操作类型，目前仅断连定时任务支持。
         * @example `Shutdown`
         */
        OperationType: string;
        /**
         * 是否允许终端用户自行配置定时任务。
         * @example `true`
         */
        AllowClientSetting: boolean;
    }[];
    /**
     * > 此字段暂不对外开放使用。
     */
    "MonthDesktopSetting"?: {
        /**
         * > 此字段暂不对外开放使用。
         * @example `null`
         */
        UseDuration: number;
        /**
         * > 此字段暂不对外开放使用。
         * @example `null`
         */
        BuyerId: number;
        /**
         * > 此字段暂不对外开放使用。
         * @example `null`
         */
        DesktopId: string;
    };
}
