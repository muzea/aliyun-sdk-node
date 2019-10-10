interface ModifyUisAttributeRequest {
    /**
    * 实例的地域。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 客户端token，用于保证请求的幂等性。
    * 由客户端生成该参数值，要保证在不同请求间唯一，最大不值过64个 ASCII 字符。
    * @example `d7d24a21-f4ba-4454-9173-b3828dae492b`
    */ "ClientToken"?: string;
    /**
    * 实例的名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://`或`https://`开头。
    * @example `new_uis_name`
    */ "Name"?: string;
    /**
    * 实例的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http://`或`https://`开头。
    * @example `test_uis_desc`
    */ "Description"?: string;
    /**
    * 实例的ID。
    * @example `UIS-xxxk7k971za1h6gxk****`
    */ "UisId": string;
}
export { ModifyUisAttributeRequest };