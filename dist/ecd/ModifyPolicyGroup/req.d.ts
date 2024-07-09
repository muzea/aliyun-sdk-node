export interface ModifyPolicyGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 策略ID。
     * @example `pg-gx2x1dhsmthe9****`
     */
    "PolicyGroupId": string;
    /**
     * 策略名称。
     * @example `testPolicyGroupName`
     */
    "Name"?: string;
    /**
     * 剪贴板权限。取值范围：
     * - read：只读。可以将本地内容复制到云桌面，不能将云桌面内容复制到本地。
     * - readwrite：读写。可以将本地内容复制到云桌面，也可以将云桌面内容复制到本地。
     * - off：关闭。云桌面和本地之间无法进行复制操作。
     * 默认值是off。
     * @example `off`
     */
    "Clipboard"?: string;
    /**
     * 本地磁盘映射权限。取值范围：
     * - read：只读。云桌面上有本地磁盘的映射，但是只能读取（复制）本地文件，不能修改本地文件。
     * - readwrite：读写。云桌面上有本地磁盘的映射，可以读取（复制）本地文件，也可以修改本地文件。
     * - off：关闭。云桌面上没有本地磁盘的映射。
     * @example `off`
     */
    "LocalDrive"?: string;
    /**
     * USB重定向。取值范围：
     * - on：开启
     * - off：关闭
     * @example `off`
     */
    "UsbRedirect"?: string;
    /**
     * 图像显示质量策略。取值范围：
     * - low：流畅
     * - medium：自适应
     * - high：高清
     * - lossless：无损
     * 默认值是medium。
     * @example `low`
     */
    "VisualQuality"?: string;
    /**
     * HTML5客户端访问策略。取值范围：
     * - on：允许
     * - off：禁止
     * 默认值是off。
     * > 推荐您使用ClientType相关参数统一管控登录方式。
     * @example `off`
     */
    "Html5Access"?: string;
    /**
     * HTML5客户端文件传输策略。取值范围：
     * - off：关闭
     * - upload：允许上传
     * - download：允许下载
     * - all：允许上传下载
     * 默认值是off。
     * @example `off`
     */
    "Html5FileTransfer"?: string;
    /**
     * 水印。取值范围：
     * - on：开启
     * - off：关闭
     * @example `off`
     */
    "Watermark"?: string;
    /**
     * 水印类型。支持同时选择多个类型，用英文逗号隔开。取值范围：
     * - EndUserId：显示用户名。
     * - HostName：显示云桌面ID的后15位。
     * @example `EndUserId`
     */
    "WatermarkType"?: string;
    /**
     * 水印显示的深浅程度。取值范围：
     * - LIGHT
     * - MIDDLE
     * - DARK
     * @example `LIGHT`
     */
    "WatermarkTransparency"?: string;
    /**
     * 桌面抢占策略。默认为off，不支持修改。
     * @example `off`
     */
    "PreemptLogin"?: string;
    /**
     * 管控访问域名权限，域名支持*通配符，多个域名之间以英文逗号隔开。取值范围：
     *  - off：关闭。
     *  - on：开启。
     * @example `on`
     */
    "DomainList"?: string;
    /**
     * 打印机重定向。取值范围：
     * - off：关闭
     * - on：打开
     * @example `off`
     */
    "PrinterRedirection"?: string;
    /**
     * 可抢占桌面的一组用户的用户名，最多可以设置5个。
     * > 为保证正在使用云桌面的终端用户的操作体验和数据安全，暂不允许多个用户之间互相抢占。
     */
    "PreemptLoginUser"?: string[];
    /**
     * 安全组管控规则数组。
     */
    "AuthorizeSecurityPolicyRule"?: {
        /**
         * 安全组管控规则的规则方向。取值范围：
         * - inflow：入方向
         * - outflow：出方向
         * @example `inflow`
         */
        Type: string;
        /**
         * 安全组管控规则的授权策略。取值范围：
         * - accept：允许策略，接收所有访问请求。
         * - drop：拒绝策略，拒绝所有访问请求。不返回拒绝信息，表现为发起端请求超时或者无法建立连接。
         * @example `accept`
         */
        Policy: string;
        /**
         * 安全组管控规则的端口范围。由协议（IpProtocol）的取值确定端口的取值范围：
         * - TCP协议或者UDP协议：端口取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：端口为-1/-1。
         * - GRE协议：端口为-1/-1。
         * - IpProtocol取值为all：端口为-1/-1。
         * 典型应用的常用端口请参见[常用端口](~~40724~~)。
         * @example `22/22`
         */
        PortRange: string;
        /**
         * 安全组管控规则的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 安全组管控规则的协议类型。取值范围：
         * - tcp：TCP协议
         * - udp：UDP协议
         * - icmp：ICMP（IPv4）协议
         * - gre：GRE协议
         * - all：支持所有协议
         * @example `tcp`
         */
        IpProtocol: string;
        /**
         * 安全组管控规则的优先级。数字越小，代表优先级越高。
         * 取值范围：1~60。
         * 默认值：1。
         * @example `1`
         */
        Priority: string;
        /**
         * 安全组管控规则的对象，CIDR格式的IPv4地址段。
         * @example `10.0.XX.XX/8`
         */
        CidrIp: string;
    }[];
    /**
     * 待删除安全组管控规则数组。
     */
    "RevokeSecurityPolicyRule"?: {
        /**
         * 待删除安全组管控规则的规则方向。取值范围：
         * - inflow：入方向
         * - outflow：出方向
         * @example `outflow`
         */
        Type: string;
        /**
         * 待删除安全组管控规则的授权策略。取值范围：
         * - accept：允许策略，接收所有访问请求。
         * - drop：拒绝策略，拒绝所有访问请求。不返回拒绝信息，表现为发起端请求超时或者无法建立连接。
         * 默认值：accept。
         * @example `accept`
         */
        Policy: string;
        /**
         * 待删除安全组管控规则的端口范围。由协议（IpProtocol）的取值确定端口的取值范围：
         * - TCP协议或者UDP协议：端口取值范围为1~65535。使用斜线（/）隔开起始端口和终止端口。例如：1/200。
         * - ICMP协议：端口为-1/-1。
         * - GRE协议：端口为-1/-1。
         * - IpProtocol取值为all：端口为-1/-1。
         * 典型应用的常用端口请参见[常用端口](~~40724~~)。
         * @example `22/22`
         */
        PortRange: string;
        /**
         * 待删除安全组管控规则的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 待删除安全组管控规则的协议类型。取值范围：
         * - TCP：TCP协议
         * - UDP：UDP协议
         * - ICMP：ICMP（IPv4）协议
         * - GRE：GRE协议
         * - ALL：支持所有协议
         * @example `tcp`
         */
        IpProtocol: string;
        /**
         * 待删除安全组管控规则的优先级。数字越小，代表优先级越高。
         * 取值范围：1~60。
         * 默认值：1。
         * @example `1`
         */
        Priority: string;
        /**
         * 待删除安全组管控规则的对象，CIDR格式的IPv4地址段。
         * @example `47.100.XX.XX/16`
         */
        CidrIp: string;
    }[];
    /**
     * 客户端IP白名单数组。
     */
    "AuthorizeAccessPolicyRule"?: {
        /**
         * 客户端IP白名单的描述信息。
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
     * 待删除客户端IP白名单数组。
     */
    "RevokeAccessPolicyRule"?: {
        /**
         * 待删除客户端IP白名单的描述信息。
         * @example `test`
         */
        Description: string;
        /**
         * 待删除客户端访问IP地址段。格式为CIDR格式的IPv4地址段。
         * @example `47.100.XX.XX/16`
         */
        CidrIp: string;
    }[];
    /**
     * 登录方式管控数组。
     */
    "ClientType"?: {
        /**
         * 登录方式管控，设置客户端类型。取值范围：
         * - windows：Windows客户端
         * - linux：阿里云云终端
         * - macos：macOS客户端
         * - ios：iOS客户端
         * - android：Android客户端
         * - html5：Web客户端
         * > 如果不设置ClientType相关参数，则默认允许所有类型的客户端登录云桌面。
         * @example `windows`
         */
        ClientType: string;
        /**
         * 登录方式管控，设置是否允许使用某一类型的客户端登录云桌面。取值范围：
         * - on：允许
         * - off：不允许
         * > 如果不设置ClientType相关参数，则默认允许所有类型的客户端登录云桌面。
         * @example `ON`
         */
        Status: string;
    }[];
    /**
     * 是否为图形型规格云桌面开启画质策略。对桌面性能和使用体验要求较高时，例如专业设计场景下，建议开启该策略。取值范围：
     * - on：开启
     * - off：关闭
     * @example `off`
     */
    "GpuAcceleration"?: string;
    /**
     * USB重定向规则。
     */
    "UsbSupplyRedirectRule"?: {
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
         * USB重定向类型。取值范围：
         * - 1：允许
         * - 2：拒绝
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
         * USB重定向规则类型。取值范围：
         * - 1：设备类别
         * - 2：设备厂商
         * @example `1`
         */
        UsbRuleType: number;
    }[];
    /**
     * DNS策略类型。
     * @example `OFF`
     */
    "DomainResolveRuleType"?: string;
    /**
     * 域名解析策略详情。
     */
    "DomainResolveRule"?: {
        /**
         * 域名
         * @example `*.igetget.com`
         */
        Domain: string;
        /**
         * 策略类型。
         * @example `allow`
         */
        Policy: string;
        /**
         * 策略描述。
         * @example `策略描述。`
         */
        Description: string;
    }[];
    /**
     * 是否开启录屏。取值范围：
     * - OFF：不开启录屏。
     * - ALLTIME：全程录屏，从登录桌面开始到退出桌面。
     * - PERIOD：间隔录屏，需设置录屏开始和结束时间。
     * @example `OFF`
     */
    "Recording"?: string;
    /**
     * 录屏开始时间，取值：HH:MM:SS。只有Recording取值是PERIOD时，该返回值有实际意义。
     * @example `08:00:00`
     */
    "RecordingStartTime"?: string;
    /**
     * 录屏结束时间，取值：HH:MM:SS。只有Recording取值是PERIOD时，该返回值有实际意义。
     * @example `08:59:00`
     */
    "RecordingEndTime"?: string;
    /**
     * 录屏帧数。取值范围：
     * - 2
     * - 5
     * - 10
     * - 15
     * @example `5`
     */
    "RecordingFps"?: number;
    /**
     * 录屏审计过期时间。取值范围 15-180天。
     * @example `30`
     */
    "RecordingExpires"?: number;
    /**
     * 网络重定向，取值范围：
     *  - on: 开启
     * - off: 关闭
     * 默认值是off。
     * > 该功能处于定向邀测中，暂不对外开放。
     * >
     * @example `on`
     */
    "NetRedirect"?: string;
    /**
     * 是否开启本地摄像头重定向。取值范围：
     * - on：开启
     * - off：关闭
     * 默认值是on。
     * @example `on`
     */
    "CameraRedirect"?: string;
    /**
     * 是否开启防截屏功能。取值范围：
     * - on：开启
     * - off：关闭
     * 默认值是off。
     * @example `on`
     */
    "AppContentProtection"?: string;
    /**
     * 是否开启自定义录屏。取值范围：
     * - on：开启
     * - off：关闭
     * 默认值是off。
     * @example `OFF`
     */
    "RecordContent"?: string;
    /**
     * 自定义录屏的文件过期时间，默认30天。
     * @example `30`
     */
    "RecordContentExpires"?: number;
    /**
     * 远程协助键鼠控制权限，取值范围：
     * - fullControl：完全控制。
     * - optionalControl：默认关闭，可以申请打开。
     * - disableControl：不控制。
     * @example `fullControl`
     */
    "RemoteCoordinate"?: string;
    /**
     * 与Recording配合使用，录屏指定时长后生成录屏文件。
     * @example `15`
     */
    "RecordingDuration"?: number;
    /**
     * 策略的生效范围。取值范围：
     * - GLOBAL：全局生效。
     * - IP：根据IP生效。
     * @example `GLOBAL`
     */
    "Scope"?: string;
    /**
     * Scope取值为IP的时候填写。
     */
    "ScopeValue"?: string[];
    /**
     * 录制桌面声音选项，取值范围：
     * - on：音画同期录制。
     * - off：仅录制画面不录制声音。
     * @example `on`
     */
    "RecordingAudio"?: string;
    /**
     * 网络通信协议。取值范围：
     * - TCP：只允许使用TCP。
     * - BOTH：允许自动在TCP和UDP之间切换。
     * 默认值：TCP。
     * @example `BOTH`
     */
    "InternetCommunicationProtocol"?: string;
    /**
     * 多媒体重定向。
     * @example `on`
     */
    "VideoRedirect"?: string;
    /**
     * 水印透明度，值越大，透明度越小。 取值范围：10~100。
     * @example `10`
     */
    "WatermarkTransparencyValue"?: number;
    /**
     * 水印字体颜色。 取值范围：0~16777215
     * @example `0`
     */
    "WatermarkColor"?: number;
    /**
     * 水印倾斜度。取值范围：-10~-30 。
     * @example `-10`
     */
    "WatermarkDegree"?: number;
    /**
     * 水印字体大小。 取值范围：10~20。
     * @example `10`
     */
    "WatermarkFontSize"?: number;
    /**
     * 水印字体样式。 取值范围：
     * - plain：普通。
     * - bold：加粗。
     * @example `plain`
     */
    "WatermarkFontStyle"?: string;
    /**
     * 水印行数，暂不生效。
     * @example `3`
     */
    "WatermarkRowAmount"?: number;
    /**
     * 用户申请管理员协助开关，取值范围：
     * on：开启。
     * off：关闭。
     * @example `on`
     */
    "EndUserApplyAdminCoordinate"?: string;
    /**
     * 用户之间流协同开关，取值范围：
     * on：开启。
     * off：关闭。
     * @example `on`
     */
    "EndUserGroupCoordinate"?: string;
    /**
     * 盲水印安全优先规则，取值范围：
     *  on：开启。
     *  off：关闭。
     * @example `off`
     */
    "WatermarkSecurity"?: string;
    /**
     * 用户登录桌面后是否具有管理员权限
     * > 该功能处于定向邀测中，暂不对外开放。
     * >
     * @example `deny`
     */
    "AdminAccess"?: string;
    /**
     * 盲水印防拍照功能，取值范围：
     *  on：开启。
     * off：关闭。
     * @example `off`
     */
    "WatermarkAntiCam"?: string;
    /**
     * 盲水印增强功能，取值范围：
     *  low：低。
     *  medium：中。
     *  high：高。
     * @example `medium`
     */
    "WatermarkPower"?: string;
    /**
     * 录屏客户端消息通知功能，取值范围：
     *  on：开启。
     *  off：关闭。
     * @example `off`
     */
    "RecordingUserNotify"?: string;
    /**
     * 录屏客户端通知内容。默认无需填写。
     * @example `您的桌面正在被录屏`
     */
    "RecordingUserNotifyMessage"?: string;
    "MaxReconnectTime"?: number;
}
