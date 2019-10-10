interface ReInitDiskRequest {
    "RegionId"?: string;
    /**
    * 指定的云盘ID。
    * @example `d-diskid1`
    */ "DiskId": string;
    "SourceRegionId"?: string;
    /**
    * RAM 用户的虚拟账号 ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
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
    * 密钥对名称。
    * @example `JoshuaCentOS`
    */ "KeyPairName"?: string;
    /**
    * 重新初始化云盘后是否启动实例。
    * @example `true`
    */ "AutoStartInstance"?: boolean;
    /**
    * 当指定的云盘为系统盘时，您可以设置是否开启安全加固，加载云服务器 ECS 安全组件云盾等。取值范围：
    *
    * - Active：启用安全加固，免费安装云盾。该值仅支持公共镜像。
    * - Deactive：不启用安全加固，卸载云盾等安全组件。该值支持所有镜像。
    * @example `Active`
    */ "SecurityEnhancementStrategy"?: string;
}
export { ReInitDiskRequest };