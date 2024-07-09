export interface DescribePolicyGroupsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 策略的详细信息。
     */
    DescribePolicyGroups: {
        /**
         * 策略状态。
         * @example `AVAILABLE`
         */
        PolicyStatus: string;
        /**
         * HTML5客户端访问策略。
         * @example `off`
         */
        Html5Access: string;
        /**
         * 水印类型。
         * @example `EndUserId`
         */
        WatermarkType: string;
        /**
         * 桌面抢占策略。目前均为`off`，即禁止抢占。
         * @example `off`
         */
        PreemptLogin: string;
        /**
         * 该参数暂未开放使用。
         * @example `test`
         */
        WatermarkCustomText: string;
        /**
         * 剪贴板权限。
         * @example `readwrite`
         */
        Clipboard: string;
        /**
         * 访问域名权限管控。域名支持*通配符，多个域名之间以英文半角逗号隔开。取值范围：
         * - off：关闭。
         * - on：开启。
         * @example `off`
         */
        DomainList: string;
        /**
         * 策略ID。
         * @example `pg-gx2x1dhsmthe9****`
         */
        PolicyGroupId: string;
        /**
         * 打印机重定向策略。
         * @example `on`
         */
        PrinterRedirection: string;
        /**
         * 水印显示的深浅程度。
         * @example `LIGHT`
         */
        WatermarkTransparency: string;
        /**
         * HTML5客户端文件传输策略。
         * @example `off`
         */
        Html5FileTransfer: string;
        /**
         * USB重定向。
         * @example `on`
         */
        UsbRedirect: string;
        /**
         * 策略类型。
         * @example `SYSTEM`
         */
        PolicyGroupType: string;
        /**
         * 水印。
         * @example `on`
         */
        Watermark: string;
        /**
         * 图像显示质量策略。
         * @example `medium`
         */
        VisualQuality: string;
        /**
         * 关联了该策略的云桌面数量。
         * 仅自定义策略支持返回。
         * @example `1`
         */
        EdsCount: number;
        /**
         * 策略名称。
         * @example `testPolicyGroupName`
         */
        Name: string;
        /**
         * 本地磁盘映射权限。
         * @example `readwrite`
         */
        LocalDrive: string;
        /**
         * 安全组管控规则信息数组。
         */
        AuthorizeSecurityPolicyRules: {
            /**
             * 安全组管控规则的规则方向。
             * @example `inflow`
             */
            Type: string;
            /**
             * 安全组管控规则的授权策略。
             * @example `accept`
             */
            Policy: string;
            /**
             * 安全组管控规则的描述信息。
             * @example `test`
             */
            Description: string;
            /**
             * 安全组管控规则的端口范围。
             * @example `22/22`
             */
            PortRange: string;
            /**
             * 安全组管控规则的协议类型。
             * @example `tcp`
             */
            IpProtocol: string;
            /**
             * 安全组管控规则的优先级，数字越小，代表优先级越高。
             * @example `1`
             */
            Priority: string;
            /**
             * 安全组管控规则的对象，CIDR格式的IPv4地址段。
             * @example `47.100.XX.XX/16`
             */
            CidrIp: string;
        }[];
        /**
         * 客户端访问IP白名单数组。
         */
        AuthorizeAccessPolicyRules: {
            /**
             * 客户端访问IP地址段备注信息。
             * @example `test`
             */
            Description: string;
            /**
             * 客户端访问IP地址段。格式为CIDR格式的IPv4地址段。
             * @example `47.100.XX.XX/16`
             */
            CidrIp: string;
        }[];
        /**
         * 登录方式管控数组。
         */
        ClientTypes: {
            /**
             * 是否允许某一类型的客户端登录云桌面。
             * @example `ON`
             */
            Status: string;
            /**
             * 客户端类型。
             * @example `windows`
             */
            ClientType: string;
        }[];
        /**
         * 可抢占桌面的一组用户的用户名。
         */
        PreemptLoginUsers: string[];
        /**
         * 是否为图形型规格云桌面开启画质策略。对桌面性能和使用体验要求较高时，例如专业设计场景下，建议开启该策略。
         * @example `off`
         */
        GpuAcceleration: string;
        /**
         * USB重定向规则。
         */
        UsbSupplyRedirectRule: {
            /**
             * 生产厂商ID。参见[Valid USB Vendor IDs (VIDs)](https://www.usb.org/sites/default/files/vendor_ids032322.pdf_1.pdf)。
             * @example `04**`
             */
            VendorId: string;
            /**
             * 产品ID。
             * @example `08**`
             */
            ProductId: string;
            /**
             * 规则描述。
             * @example `测试规则`
             */
            Description: string;
            /**
             * USB重定向类型。
             * @example `1`
             */
            UsbRedirectType: number;
            /**
             * 设备类别，当`usbRuleType`为1的时候需要填写。参见[Defined Class Codes](https://www.usb.org/defined-class-codes)。
             * @example `0Eh`
             */
            DeviceClass: string;
            /**
             * 设备子类别，当`usbRuleType`为1的时候需要填写。参见[Defined Class Codes](https://www.usb.org/defined-class-codes)。
             * @example `xxh`
             */
            DeviceSubclass: string;
            /**
             * USB重定向规则类型。
             * @example `1`
             */
            UsbRuleType: number;
        }[];
        /**
         * 域名解析策略开关。
         * @example `on`
         */
        DomainResolveRuleType: string;
        /**
         * 域名解析策略列表。
         */
        DomainResolveRule: {
            /**
             * 域名。
             * @example `*.com`
             */
            Domain: string;
            /**
             * 解析策略，取值范围。
             *  - allow： 允许。
             *  - block： 拒绝。
             * @example `allow`
             */
            Policy: string;
            /**
             * 策略描述。
             * @example `测试规则`
             */
            Description: string;
        }[];
        /**
         * 网络重定向策略列表。
         * > 该功能处于定向邀测中，暂不对外开放。
         */
        NetRedirectRule: {
            /**
             * 策略内容。
             * @example `*.com`
             */
            Domain: string;
            /**
             * 策略类型。
             * @example `domain`
             */
            RuleType: string;
            /**
             * 策略类型。
             * @example `allow`
             */
            Policy: string;
        }[];
        /**
         * 是否开启录屏。
         * @example `OFF`
         */
        Recording: string;
        /**
         *  录屏开始时间，取值：HH:MM:SS。只有Recording取值是PERIOD时，该返回值有实际意义。
         * @example `08:00:00`
         */
        RecordingStartTime: string;
        /**
         *  录屏结束时间，取值：HH:MM:SS。只有Recording取值是PERIOD时，该返回值有实际意义。
         * @example `08:59:00`
         */
        RecordingEndTime: string;
        /**
         * 录屏帧数。取值范围：
         * - 2
         * - 5
         * - 10
         * - 15
         * @example `5`
         */
        RecordingFps: number;
        /**
         * 录屏审计过期时间。取值范围 15-180天。
         * @example `15`
         */
        RecordingExpires: number;
        /**
         * 是否开启本地摄像头重定向。
         * @example `on`
         */
        CameraRedirect: string;
        /**
         * 网络重定向，取值范围：
         *  - on： 开启
         *  - off： 关闭
         *
         * 默认值是off。
         * > 该功能处于定向邀测中，暂不对外开放。
         * >
         * @example `off`
         */
        NetRedirect: string;
        /**
         * 是否开启防截屏功能。取值范围：
         * - on：开启。
         * - off：关闭。
         * 默认值是off。
         * @example `off`
         */
        AppContentProtection: string;
        /**
         * 是否开启自定义录屏。取值范围：
         * - on：开启。
         * - off：关闭。
         * 默认值是off。
         * @example `off`
         */
        RecordContent: string;
        /**
         * 自定义录屏的文件过期时间，默认30天。
         * @example `30`
         */
        RecordContentExpires: number;
        /**
         * 远程协助键鼠控制权限，取值范围：
         * - fullControl：完全控制。
         * - optionalControl：默认关闭，可以点击申请键鼠操作权限打开。
         * - disableControl：不控制。
         * @example `fullControl`
         */
        RemoteCoordinate: string;
        /**
         * 与Recording录屏选项配合使用，录屏指定时长后生成录屏文件。
         * @example `10`
         */
        RecordingDuration: number;
        /**
         * 策略的生效范围。取值范围：
         * - GLOBAL：全局生效。
         * - IP：根据IP生效。
         * @example `GLOBAL`
         */
        Scope: string;
        /**
         * Scope取值为IP的时候填写。当Scope为IP时生效，否则不生效。
         */
        ScopeValue: string[];
        /**
         * 录制桌面声音选项，取值范围：
         * - on：音画同期录制。
         * - off：仅录制画面不录制声音。
         * @example `on`
         */
        RecordingAudio: string;
        /**
         * 网络通信协议。取值范围：
         * - TCP：只允许使用TCP。
         * - BOTH：允许自动在TCP和UDP之间切换。
         * 默认值：TCP。
         * @example `BOTH`
         */
        InternetCommunicationProtocol: string;
        /**
         * 多媒体重定向。取值范围：
         * on：打开媒体重定向。
         * off：关闭媒体重定向。
         * @example `off`
         */
        VideoRedirect: string;
        /**
         * 水印透明度，值越大，透明度越小。 取值范围： 10\~100。
         * @example `10`
         */
        WatermarkTransparencyValue: number;
        /**
         * 水印字体颜色。 取值范围： 0\~16777215。
         * @example `0`
         */
        WatermarkColor: number;
        /**
         * 水印字体大小。 取值范围：10\~20。
         * @example `10`
         */
        WatermarkFontSize: number;
        /**
         * 水印字体样式， 取值范围：
         * - plain，普通。
         * - bold，加粗。
         * @example `plain`
         */
        WatermarkFontStyle: string;
        /**
         * 水印倾斜度。取值范围：-10\~-30 。
         * @example `-10`
         */
        WatermarkDegree: number;
        /**
         * 水印行数，暂不生效。
         * @example `5`
         */
        WatermarkRowAmount: number;
        /**
         * 用户申请管理员协助开关，取值范围：
         * on：开启。
         * off：关闭。
         * @example `on`
         */
        EndUserApplyAdminCoordinate: string;
        /**
         * 用户之间流协同开关，取值范围：
         * on：开启。
         * off：关闭。
         * @example `on`
         */
        EndUserGroupCoordinate: string;
        /**
         * CPU保护模式开关，取值范围： on：开启。 off：关闭。
         * @example `on`
         */
        CpuProtectedMode: string;
        /**
         * CPU整体使用率，取值范围： 70 ～ 90。
         * @example `70`
         */
        CpuRateLimit: number;
        /**
         * CPU整体采样时长，取值范围： 10 ～ 60。
         * @example `10`
         */
        CpuSampleDuration: number;
        /**
         * CPU单核使用率，取值范围： 70 ～ 100。
         * @example `70`
         */
        CpuSingleRateLimit: number;
        /**
         * CPU降频时长，取值范围： 30 ～ 120。
         * @example `30`
         */
        CpuDownGradeDuration: number;
        /**
         * 不受CPU使用率限制约束进程白名单。
         */
        CpuProcessors: string[];
        /**
         * 内存保护模式开关，取值范围：
         *  on：开启。
         * off：关闭。
         * @example `on`
         */
        MemoryProtectedMode: string;
        /**
         * 内存整体使用率，取值范围： 70 ～ 90。
         * @example `70`
         */
        MemoryRateLimit: number;
        /**
         * 内存整体采样时长，取值范围： 30 ～ 60。
         * @example `30`
         */
        MemorySampleDuration: number;
        /**
         * 单个进程内存使用率，取值范围： 30 ～ 60。
         * @example `30`
         */
        MemorySingleRateLimit: number;
        /**
         * 单个进程内存降频时长，取值范围： 30 ～ 120。
         * @example `30`
         */
        MemoryDownGradeDuration: number;
        /**
         * 不受内存使用率限制约束进程白名单。
         */
        MemoryProcessors: string[];
        /**
         * 盲水印安全优先规则，取值范围：
         *  on：开启。
         *  off：关闭。
         * @example `on`
         */
        WatermarkSecurity: string;
        /**
         * 盲水印防拍照功能，取值范围：
         *  on：开启。
         *  off：关闭。
         * @example `off`
         */
        WatermarkAntiCam: string;
        /**
         * 盲水印增强功能，取值范围：
         *  low：低。
         *  medium：中。
         *  high：高。
         * @example `medium`
         */
        WatermarkPower: string;
        /**
         * 录屏客户端消息通知功能，取值范围：
         *  on：开启。
         *  off：关闭。
         * @example `off`
         */
        RecordingUserNotify: string;
        /**
         * 录屏客户端通知内容。默认无需填写。
         * @example `您的桌面正在被录屏`
         */
        RecordingUserNotifyMessage: string;
        /**
         * 用户登录桌面后是否具有管理员权限
         * > 该功能处于定向邀测中，暂不对外开放。
         * >
         * @example `deny`
         */
        AdminAccess: string;
        MaxReconnectTime: number;
        DisplayMode: string;
        StreamingMode: string;
        ColorEnhancement: string;
        SmoothEnhancement: string;
        QualityEnhancement: string;
        VideoEncPolicy: string;
        TargetFps: number;
        VideoEncMinQP: number;
        VideoEncMaxQP: number;
        VideoEncAvgKbps: number;
        VideoEncPeakKbps: number;
    }[];
}
