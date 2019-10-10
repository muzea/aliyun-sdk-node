interface ReplaceSystemDiskRequest {
    "RegionId"?: string;
    /**
    * 指定实例的ID。
    * @example `i-instanceid1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 重置系统时使用的镜像ID。
    * @example `m-imageid1`
    */ "ImageId"?: string;
    /**
    * 新的系统盘容量，单位为GiB。取值范围：Max{20, 参数ImageId对应的镜像大小}~500
    * 默认值：Max{40, 参数ImageId对应的镜像大小}。
    * @example `80`
    */ "SystemDisk.Size"?: number;
    /**
    * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多详情，请参见[如何保证幂等性](~~25693~~)。
    * @example `123e4567-e89b-12d3-a456-426655440000`
    */ "ClientToken"?: string;
    /**
    * 是否使用阿里云提供的虚拟机系统配置（Windows：NTP、KMS；Linux：NTP、YUM）。
    * > 挂载系统盘时（即设备名为/dev/xvda）有效。
    * @example `true`
    */ "UseAdditionalService"?: boolean;
    /**
    * 实例的密码。长度为8至30个字符，必须同时包含大小写英文字母、数字和特殊符号中的三类字符。特殊符号可以是：
    * ```
    * ()`~!@#$%^&*-_+=|{}[]:;'<>,.?/
    * ```
    * 其中，Windows实例不能以斜线号（/）为密码首字符。
    * > 如果传入`Password`参数，建议您使用HTTPS协议发送请求，避免密码泄露。
    * @example `EcsV587!`
    */ "Password"?: string;
    /**
    * 是否使用镜像预设的密码。使用该参数时，Password参数必须为空，同时您需要确保使用的镜像已经设置了密码。
    * 默认值：false
    * @example `false`
    */ "PasswordInherit"?: boolean;
    /**
    * 密钥对名称。
    *
    * - Windows系统ECS实例，忽略该参数。默认为空。即使填写了该参数，仍旧只执行Password的内容。
    * - Linux系统ECS实例的密码登录方式会被初始化成禁止。
    *
    * @example `JoshuaCentOS`
    */ "KeyPairName"?: string;
    /**
    * @example `d-23b3p4***`
    */ "DiskId"?: string;
    /**
    * 操作系统发行版。取值为CentOS、Ubuntu等。
    * @example `CentOS`
    */ "Platform"?: string;
    /**
    * 系统架构。取值范围：
    * - i386
    * - x86_64
    * @example `i386`
    */ "Architecture"?: string;
    /**
    * 当指定的云盘为系统盘时，您可以设置是否开启安全加固，加载云安全中心插件等。取值范围：
    *
    * - Active：启用安全加固，使用云安全中心免费版。该值仅支持公共镜像。
    * - DeactiveDeactive：不启用安全加固，禁止加载云安全中心插件。该值支持所有镜像。
    *
    * @example `Active`
    */ "SecurityEnhancementStrategy"?: string;
}
export { ReplaceSystemDiskRequest };