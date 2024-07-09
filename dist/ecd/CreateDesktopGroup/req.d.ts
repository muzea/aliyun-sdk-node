export interface CreateDesktopGroupRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑模板ID。
     * @example `b-je9hani001wfn****`
     */
    "BundleId": string;
    /**
     * 云电脑池所属的办公网络ID。
     * @example `cn-hangzhou+os-c5cy7q578s8jc****`
     */
    "OfficeSiteId": string;
    /**
     * 云电脑池关联的策略ID。
     * @example `pg-9c2d6t2dwflqr****`
     */
    "PolicyGroupId": string;
    /**
     * 云电脑池名称。不超过30个字符。必须以大小字母或中文开头，不能以`http://`和`https://`开头。可以包含中文、英文、数字、半角冒号（:）、下划线（\_）、点号（.）或者短划线（-）。
     * @example `CloudComputerPool01`
     */
    "DesktopGroupName"?: string;
    /**
     * 目录ID。
     * > 该参数暂未开放使用。
     * @example `dri-uf62w3qzt4aigvlcb****`
     */
    "DirectoryId"?: string;
    /**
     * 伸缩策略ID。
     * > 该参数暂未开放使用。
     * @example `ss-f9dkjz6vw3aaw****`
     */
    "ScaleStrategyId"?: string;
    /**
     * 云电脑池的办公网络所在的VPC ID。
     * > 该参数暂未开放使用。
     * @example `vpc-uf6w8u60n8xbkg5el****`
     */
    "VpcId"?: string;
    /**
     * 创建云电脑池时默认生成的云电脑数量。默认值为1。
     * @example `1`
     */
    "DefaultInitDesktopCount"?: number;
    /**
     * 会话断开连接后继续保留的时间。单位为毫秒，取值范围为180000（3分钟）~345600000（4天）。取值为0时，表示始终保留。
     * 当会话因为用户主动断开或因为其他因素意外断开时，从断开的时刻开始计算，若在该保留时长内用户始终未重新建立与该会话的连接，则该会话注销，未保存的数据都将销毁；若在该保留时长内，用户重新建立连接成功，则仍可进入原来的会话，仍可访问对话断开之前的数据。
     * @example `180000`
     */
    "KeepDuration"?: number;
    /**
     * 云电脑的付费类型。
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 包年包月云电脑池的购买时长。当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。单位由`PeriodUnit`指定。
     * - 如果`PeriodUnit`为`Month`，该参数的取值范围：
     *     - 1
     *     - 2
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
     * 云电脑池类型。
     * > 该参数暂未开放使用。
     * @example `0`
     */
    "OwnType"?: number;
    /**
     * 是否自动支付包年包月订单。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 备注信息。
     * @example `comment`
     */
    "Comments"?: string;
    /**
     * 包年包月云电脑池内自动创建云电脑的上限。即当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。默认值为1，取值范围为0~`MaxDesktopsCount`。
     * @example `1`
     */
    "MinDesktopsCount"?: number;
    /**
     * 按量付费云电脑池内能容纳的云电脑最大数量。取值范围：0~500。
     * @example `50`
     */
    "MaxDesktopsCount"?: number;
    /**
     * 是否允许包年包月云电脑池自动创建云电脑。即当参数`ChargeType`取值为`PrePaid`时才生效，且为必选值。
     * @example `1`
     */
    "AllowAutoSetup"?: number;
    /**
     * 按量付费云电脑池内允许预留的云电脑数量。当参数`ChargeType`取值为`PostPaid`时才生效，且为必选值。取值范围：
     * - 0：不预留
     * - N：预留N台（1≤N≤100）
     * > 如果不预留可用云电脑，当终端用户发起连接请求时，系统需要先创建并启动云电脑，然后分配给用户，所需时间相对较长。建议您根据需要预留一定数量的云电脑，保证终端用户的使用体验。
     * @example `1`
     */
    "AllowBufferCount"?: number;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 云电脑池的授权用户ID列表。
     */
    "EndUserIds"?: string[];
    /**
     * 云电脑重置类型。
     * @example `0`
     */
    "ResetType"?: number;
    /**
     * 多会话云电脑池的负载均衡策略。
     * > 该参数暂未开放使用。
     * @example `0`
     */
    "LoadPolicy"?: number;
    /**
     * 多会话云电脑池中每台云电脑允许的并发会话数。
     * > 该参数暂未开放使用。
     * @example `2`
     */
    "BindAmount"?: number;
    /**
     * 云电脑池的类型。
     * > 该参数暂未开放使用。
     * @example `teacher`
     */
    "Classify"?: string;
    /**
     * 所有云电脑池分类的用户。
     * > 该参数暂未开放使用。
     * @example `Alice`
     */
    "AllClassifyUsers"?: boolean;
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
     * 会话占用率阈值，用作多会话云电脑池的自动伸缩触发条件。会话占用率的计算公式为：
     * ```会话占用率 = 已绑定会话数 / (云电脑资源总数 × 每台云电脑支持的最大会话数) × 100%```
     * 当会话占用率达到该阈值时，则会新建云电脑；未达到该阈值时，则删除多余的云电脑。
     * > 该参数暂未开放使用。
     * @example `0.5`
     */
    "RatioThreshold"?: number;
    /**
     * 会话处于连接状态的最大时长。会话连接时长达到此值时将自动断开连接。单位：毫秒。取值范围：900000（15分钟）~345600000（4天）。
     * @example `900000`
     */
    "ConnectDuration"?: number;
    /**
     * 用户会话建立连接后，如果在该最大时长内，始终没有任何键盘或鼠标操作，则该会话断开连接。单位：毫秒。取值范围为360000（6分钟）~3600000（60分钟）。
     * 在达到该时长的30秒前，会话中的终端用户将收到保存文档数据的提示消息，此时终端用户需及时保存文档数据，避免丢失。
     * > 仅适用于镜像版本号不低于1.0.2的云电脑。
     * @example `360000`
     */
    "IdleDisconnectDuration"?: number;
    /**
     * 空闲关机时间。当云电脑空闲时长达到该值时，自动关机。关机后如果有用户连接，会自动开机。单位：毫秒。
     * @example `300000`
     */
    "StopDuration"?: number;
    /**
     * 是否开启用户数据漫游。
     * > 该参数暂未开放使用。
     * @example `false`
     */
    "ProfileFollowSwitch"?: boolean;
    /**
     * 用户数据漫游功能使用的NAS文件系统ID。
     * > 该参数暂未开放使用。
     * @example `kegd-nas-****`
     */
    "FileSystemId"?: string;
    /**
     * - 对于包年包月云电脑池：购买云电脑数量。取值范围：0~200。
     * - 对于按量付费云电脑池：池内云电脑最小创建数量。默认值为1，取值范围为0~`MaxDesktopsCount`。
     * @example `3`
     */
    "BuyDesktopsCount"?: number;
    /**
     * 云电脑池版本。
     * @example `2`
     */
    "GroupVersion"?: number;
    /**
     * 是否为包年包月云电脑池开启自动续费。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 标签键。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 标签值。可以为空字符串。最多支持128个字符，不能以`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
