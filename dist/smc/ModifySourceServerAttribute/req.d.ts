interface ModifySourceServerAttributeRequest {
    "RegionId"?: string;
    /**
    * 迁移源ID。
    * @example `s-xxxxxxxxxxx`
    */ "SourceId": string;
    /**
    * @example `000000`
    */ "OwnerId"?: number;
    /**
    * 迁移源名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以 http:// 和 https:// 开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
    * 默认值：空。
    * @example `MySourceServer`
    */ "Name"?: string;
    /**
    * 迁移源描述。取值需满足以下要求：
    * - 能包含 0~256 个字符。
    * - 不能以 http:// 和 https:// 开头。
    * - 不填则为空。
    * 默认值：空。
    * @example `This is a source server.`
    */ "Description"?: string;
}
export { ModifySourceServerAttributeRequest };