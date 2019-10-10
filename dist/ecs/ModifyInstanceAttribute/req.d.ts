interface ModifyInstanceAttributeRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `i-instance1`
    */ "InstanceId": string;
    "SourceRegionId"?: string;
    /**
    * RAM用户的虚拟账号ID。
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
    * 操作系统的计算机名。
    * -   点号（`.`）和短横线（`-`）不能作为首尾字符，更不能连续使用。
    * - Windows实例：字符长度为2~15，不支持点号（`.`），不能全是数字。允许大小写英文字母、数字和短横线（`-`）。
    * - 其他类型实例（Linux 等）：字符长度为2~64，支持多个点号（`.`），点之间为一段，每段允许大小写英文字母、数字和短横线（`-`）。
    * @example `LocalHost`
    */ "HostName"?: string;
    /**
    * 实例名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（`:`）、下划线（`_`）或者连字符（`-`）。
    * @example `EcsInstance`
    */ "InstanceName"?: string;
    /**
    * 实例描述。长度为2~256个英文或中文字符，不能以http://和https://开头。
    * 默认值：无。
    * @example `InstanceAttribute`
    */ "Description"?: string;
    /**
    * 实例自定义数据，需要以Base64编码。编码前，原始数据不能超过16 KB。建议不要明文传入敏感信息，例如密码和私钥等。如果必须传入敏感信息，建议您加密后再以Base64编码传入，在实例内部以同样的方式反解密。
    * @example `ZWNobyBoZWxsbyBlY3Mh`
    */ "UserData"?: string;
    /**
    * 实例是否可以回收。
    * @example `false`
    */ "Recyclable"?: boolean;
    /**
    * 修改t5突发性能实例的运行模式。取值范围：
    * - Standard：标准模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的性能约束模式章节。
    * - Unlimited：无性能约束模式，实例性能请参见[什么是突发性能实例](~~59977~~)下的无性能约束模式章节。
    * 默认值：无。
    * @example `Standard`
    */ "CreditSpecification"?: string;
    /**
    * 实例释放保护属性，指定是否支持通过控制台或API（[DeleteInstance](~~25507~~)）释放实例。
    * 默认值：无。
    * > 该属性仅适用于按量付费实例，且只能限制手动释放操作，对系统释放操作不生效。
    * @example `false`
    */ "DeletionProtection"?: boolean;
}
export { ModifyInstanceAttributeRequest };