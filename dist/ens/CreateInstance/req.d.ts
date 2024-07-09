export interface CreateInstanceRequest {
    /**
     * 实例规格。
     * 实例规格详情请参见[使用限制](~~66124~~)。
     * @example `ens.se1.tiny`
     */
    "InstanceType": string;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "EnsRegionId": string;
    /**
     * 实例的密码。
     * 长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。可以设置以下特殊符号：```()`~!@#$%^&*-_+=|{}[]:;'<>,.?/```
     * @example `yourPassword:1`
     */
    "Password"?: string;
    /**
     * 购买资源的时长，取值范围：**1**~**9**和**12**，单位：月。
     * @example `12`
     */
    "Period": string;
    /**
     * 镜像文件ID，启动实例时选择的镜像资源。
     * @example `yourImage ID`
     */
    "ImageId"?: string;
    /**
     * 系统盘大小，单位为GiB。取值：**20**，**40**，不能比镜像小，需要为10的倍数。
     * @example `40`
     */
    "SystemDisk.Size"?: string;
    /**
     * 实例数量。
     * @example `1`
     */
    "Quantity": string;
    /**
     * 第一块数据盘的容量大小，单位为GiB，容量至少为20 GiB且为10的倍数。
     * @example `50`
     */
    "DataDisk.1.Size"?: string;
    /**
     * 如果您第一次创建该参数为必传。如果已有实例资源，则默认按照已存在的计费方式。取值：
     * - **BandwidthByDay**：日峰值带宽。
     * - **95BandwidthByMonth**：月95峰值带宽。
     * @example `95BandwidthByMonth`
     */
    "InternetChargeType"?: string;
    /**
     * 每次自动续费的时长，当参数**AutoRenew**取值**True**时为必填。取值：**1**~**12**，单位：月。
     * @example `12`
     */
    "AutoRenewPeriod"?: string;
    /**
     * 是否要自动续费。取值：**True**|**False**（默认值）。
     * @example `True`
     */
    "AutoRenew"?: string;
    /**
     * IP类型。取值：
     * - **ipv4**（默认值）：IPv4。
     * - **ipv6**：IPv6。
     * - **ipv4Andipv6**：IPv4和IPv6。
     * @example `ipv4`
     */
    "IpType"?: string;
    /**
     * 密钥对名称。仅支持传单个名称。
     * @example `TestKeyPairName`
     */
    "KeyPairName"?: string;
    /**
     * 自定义数据，以`#!`开头。目前，最长支持256字符，最大支持16 KB。传参内容仅支持自定义数据Script，不支持InstanceMetaData渲染。
     * 您可传入自定义数据。数据以Base64的方式编码。调用API发起请求时，不会加密您设置的自定义数据，建议您不要以明文方式传入机密的信息，例如：密码和私钥等。如果需要传入密码和私钥等内容，请您对内容进行加密后，然后以Base64的方式编码后再传入。在实例内部以同样的方式反解密。
     * 详情请参见[数据格式](https://cloudinit.readthedocs.io/en/latest/topics/format.html)。
     * @example `#!/bin/sh  echo "Hello World.  The time is now $(date -R)!" | tee /home/output.txt`
     */
    "UserData"?: string;
    /**
     * 交换机ID。
     * @example `YourVSwitchId`
     */
    "VSwitchId"?: string;
    /**
     * 内网地址。
     * 如果传了内网地址，则vSwitch必传。vSwitch需要先创建好，否则会报错。
     * @example `10.10.10.10`
     */
    "PrivateIpAddress"?: string;
    /**
     * 支付方式。目前为固定值Subscription：预付费实例，暂不支持修改。
     * @example `Subscription`
     */
    "PaymentType"?: string;
    /**
     * 实例的名称。命名规则如下所示：
     * - 长度为**2**~**128**个英文或中文字符。
     * - 必须以大小字母或中文开头，不能以http://和https://开头。
     * - 可以包含数字、半角冒号（:）、下划线（_）、英文句号（.）或者连字符（-）。
     * 如果没有指定该参数，默认值为实例的InstanceId。
     * @example `test：Instance_Name.1-2`
     */
    "InstanceName"?: string;
    /**
     * 云服务器的主机名。
     * 通用命名规则：英文句号（.）和短横线（-）不能作为首尾字符，更不能连续使用。
     * 具体实例命名规则如下：
     * - Windows实例：字符长度为**2**~**15**，不支持英文句号（.），不能全是数字。允许大小写英文字母、数字和短横线（-）。
     * - 其他类型实例（Linux等）：字符长度为**2**~**64**，支持多个英文句号（.），英文句号之间为一段，每段允许大小写英文字母、数字和短横线（-）。
     * @example `test-HostName`
     */
    "HostName"?: string;
    /**
     * 是否为**HostName**和**InstanceName**添加有序后缀。有序后缀从**001**开始递增，最大不能超过**999**。
     * 例如：**LocalHost001**，**LocalHost002**和**MyInstance001**，**MyInstance002**。
     * 默认值：**false**。
     * @example `false`
     */
    "UniqueSuffix"?: boolean;
    /**
     * 公网IP是否可以分配给指定实例。取值：
     * - **true**（默认值）：可以分配。
     * - **false**：不可以分配。
     * @example `true`
     */
    "PublicIpIdentification"?: boolean;
    /**
     * 是否使用镜像预设的密码。取值：
     * - **true**：使用镜像预设的密码，且**Password**参数必须为空，同时您需要确保使用的镜像已经设置了密码。
     * - **false**：不使用镜像预设的密码。
     * @example `false`
     */
    "PasswordInherit"?: boolean;
}
