interface BindAxbRequest {
    "RegionId"?: string;
    /**
    * AXB中的A号码。
    * A号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
    * @example `15000000000`
    */ "PhoneNoA": string;
    /**
    * 绑定关系的过期时间。必须晚于当前时间1分钟以上。
    * @example `2019-09-05 12:00:00`
    */ "Expiration": string;
    /**
    * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
    * @example `FC123456`
    */ "PoolKey"?: string;
    /**
    * AXB中的B号码，A号码拨打X号码时会转接到B号码，可通过接口**UpdateSubscription**更新B号码。
    * B号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
    * @example `15000000001`
    */ "PhoneNoB"?: string;
    /**
    * RAM用户的虚拟账号ID。
    * @example `155780923770`
    */ "OwnerId"?: number;
    /**
    * AXB中的X号码。未指定X号码时，将根据参数**ExpectCity**从指定号码池中随机指定一个号码作为X号码。
    * X号码是您绑定号码前在控制台或通过接口**BuySecretNo**购买的电话号码，用于转接电话。
    * @example `17000000000`
    */ "PhoneNoX"?: string;
    /**
    * 指定城市进行X号码的选号。
    * 如果当前号池中没有该城市的可用号码，或未指定此参数，将从当前号码池中随机分配一个其他城市的号码作为X号码。
    * 如果配置了严格模式，则不存在符合条件的号码时会提示分配错误。
    * @example `北京`
    */ "ExpectCity"?: string;
    /**
    * 是否需要针对该绑定关系产生的所有通话录制通话录音。
    * @example `true`
    */ "IsRecordingEnabled"?: boolean;
    /**
    * 外部业务扩展字段，通话记录回执消息中会回传此参数。
    * @example `abcdef`
    */ "OutId"?: string;
    /**
    * 外部业务ID。
    * @example `abcdef`
    */ "OutOrderId"?: string;
    /**
    * 重置绑定关系中的号码显示逻辑，1：主被叫显示中间号码X；2：B/N侧号码呼叫时，给A侧号码显示B/N的真实号码；3：A侧号码呼叫时，给B/N侧号码显示真实号码。
    * @example `1`
    */ "CallDisplayType"?: number;
    "RingConfig"?: string;
}
export { BindAxbRequest };