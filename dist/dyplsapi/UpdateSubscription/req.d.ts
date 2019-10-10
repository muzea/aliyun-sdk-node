interface UpdateSubscriptionRequest {
    "RegionId"?: string;
    /**
    * 绑定关系ID。
    * 可以在控制台的**号码管理** > **号码详情**中查看绑定关系ID，或者在调用BindAxb等号码绑定API时查看返回参数中的**SubsId**。
    * @example `1000000768798832`
    */ "SubsId": string;
    /**
    * 号码绑定关系中的X号码。
    * @example `15000000000`
    */ "PhoneNoX": string;
    /**
    * 修改绑定关系的操作，包括：
    * - **updateNoA**：修改A号码。
    * - **updateNoB**：修改B号码。
    * - **updateExpire**：修改绑定关系有效期。
    * - **updateAxgGroup**：修改G号码组。
    * - **updateCallRestrict**：设置单通呼叫限制。
    * - **updateCallDisplayType**：更新呼叫显号逻辑。
    * - **updateOutId**：更新OutId字段。
    * - **updateIsRecordingEnabled**：更新绑定中录音状态。
    * @example `updateNoA`
    */ "OperateType": string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * 产品类型。
    * > 适用于原阿里大于客户，阿里云用户可忽略。
    * @example `AXB_170`
    */ "ProductType"?: string;
    /**
    * 设置绑定关系中的A号码，当**OperateType**指定为**updateNoA**时必填。
    * @example `150000000`
    */ "PhoneNoA"?: string;
    /**
    * 设置绑定关系中的B号码，当**OperateType**指定为**updateNoB**时必填。
    * @example `150000001`
    */ "PhoneNoB"?: string;
    /**
    * 设置绑定关系中的G号码组ID，当**OperateType**指定为**updateAxgGroup**时必填。
    * @example `1234`
    */ "GroupId"?: string;
    /**
    * 设置单通呼叫限制，当**OperateType**指定为**updateCallRestrict**时必填。
    * 取值为：
    * -  **CONTROL_AX_DISABLE**：A号码无法呼叫X号码。
    * -  **CONTROL_BX_DISABLE**：B号码无法呼叫X号码。
    * -  **CONTROL_CLEAR_DISABLE**：清除呼叫限制。
    * @example `CONTROL_BX_DISABLE `
    */ "CallRestrict"?: string;
    /**
    * 重新设置绑定关系的过期时间，**OperateType**为**updateExpire**时必填。过期时间必须晚于当前时间1分钟以上。
    * @example `2019-09-05 12:00:00`
    */ "Expiration"?: string;
    /**
    * 重置绑定关系中的号码显示逻辑，1：主被叫显示中间号码X；2：B/N侧号码呼叫时，给A侧号码显示B/N的真实号码；3：A侧号码呼叫时，给B/N侧号码显示真实号码。
    * @example `1`
    */ "CallDisplayType"?: number;
    /**
    * 重新设置绑定关系中的OutId
    * @example `abcdef`
    */ "OutId"?: string;
    /**
    * 重新设置绑定关系中的录音状态
    * @example `true`
    */ "IsRecordingEnabled"?: boolean;
    "RingConfig"?: string;
}
export { UpdateSubscriptionRequest };