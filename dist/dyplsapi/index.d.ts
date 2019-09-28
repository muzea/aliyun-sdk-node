interface DYPLSAPI {
    /**
    * 调用接口QuerySecretNoRemain查询线上可购号码余量。
    */ QuerySecretNoRemain(query: {
        "RegionId"?: string;
        /**
        * 号码类型。其中：
        * - 1表示虚商号码，即170或171。
        * - 2表示运营商号码。
        * - 3表示95号码。
        * @example `1`
        */ "SpecId": number;
        /**
        * 号码的归属地。
        * - **SpecId**设置为1或2时，可以在参数**City**中指定查询
        * 1. 支持输入单个城市名称查询。
        * 2. 支持输入“全国”查询，可返回全国可购号码余量。
        * 3. 支持输入“全国列表”查询，将返回全国城市中有号码的城市及数量，无号码的城市不会返回。
        * - **SpecId**设置为3时，95号码不区分归属地，只能查询全部95号码可购余量，即必须指定**City**为**全国通用**。
        * > 当前仅支持设置归属地为中国大陆地区。
        * @example `杭州`
        */ "City": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 号码前缀。查询可购号码余量时，如果指定**SecretNo**，表示查询指定前缀的号码余量。
        * 最长可指定18位号码前缀。
        * @example `130`
        */ "SecretNo"?: string;
    }): Promise<{
        "SecretRemainDTO": {
            "Amount": number;
            "City": string;
        };
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口QueryCallStatus查询呼叫状态。
    */ QueryCallStatus(query: {
        "RegionId"?: string;
        /**
        * 绑定关系ID。
        * 可以在控制台的**号码管理** > **号码详情**中查看绑定关系ID，或者在调用BindAxb等号码绑定API时查看返回参数中的**SubsId**。
        * @example `1000000768798832`
        */ "SubsId": string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 主叫号码。
        * @example `150000000`
        */ "CallNo"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "SecretCallStatusDTO": {
            "Status": number;
            "CalledNo": string;
        };
        "Code": string;
    }>;
    /**
    * 调用BuySecretNo接口购买号码。
    */ BuySecretNo(query: {
        "RegionId"?: string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey": string;
        /**
        * 号码类型。其中：
        * - 1表示虚商号码，即170或171。
        * - 2表示运营商号码。
        * - 3表示95号码。
        * @example `1`
        */ "SpecId": number;
        /**
        * 指定号码的归属地。
        * **注意**：
        * - 当前仅支持设置归属地为中国大陆地区。
        * - 95号码不区分地区，如果购买95号码，则该参数应指定为**全国通用**。
        * @example `杭州`
        */ "City": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 指定号码前缀。购买号码时，如果指定**SecretNo**，会根据指定的号码前缀模糊匹配手机号。
        * 最长可指定18位号码前缀。
        * @example `130`
        */ "SecretNo"?: string;
        /**
        * 是否将该号码置于显号池。
        * > 该参数仅对开通显号功能的客户生效。
        * @example `true`
        */ "DisplayPool"?: boolean;
    }): Promise<{
        "SecretBuyInfoDTO": {
            "SecretNo": string;
        };
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口ReleaseSecretNo释放号码。
    */ ReleaseSecretNo(query: {
        "RegionId"?: string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey": string;
        /**
        * 指定号码前缀。购买号码时，如果指定**SecretNo**，会根据指定的号码前缀模糊匹配手机号。
        * 最长可设置18位号码前缀。
        * @example `130`
        */ "SecretNo": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口QuerySubscriptionDetail查询号码的绑定关系。
    */ QuerySubscriptionDetail(query: {
        "RegionId"?: string;
        /**
        * 绑定关系ID。
        * 可以在控制台的**号码管理** > **号码详情**中查看绑定关系ID，或者在调用BindAxb等号码绑定API时查看返回参数中的**SubsId**。
        * @example `1000000768798832`
        */ "SubsId": string;
        /**
        * 绑定关系中的隐私号码，即X号码。
        * @example `17000000000`
        */ "PhoneNoX": string;
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "SecretBindDetailDTO": {
            "Status": number;
            "ExpireDate": string;
            "PhoneNoX": string;
            "NeedRecord": boolean;
            "PhoneNoB": string;
            "PhoneNoA": string;
            "SubsId": string;
            "GmtCreate": string;
        };
        "Code": string;
    }>;
    /**
    * 调用接口QuerySubsId查询绑定唯一标识SubsId。
    */ QuerySubsId(query: {
        "RegionId"?: string;
        /**
        * 绑定关系中的隐私号码，即X号码。
        * @example `17000000000`
        */ "PhoneNoX": string;
        /**
        * 号码池Key。可登录号码隐私保护控制台，在号码池管理中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Message": string;
        "SubsId": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口BindAxb添加AXB号码的绑定关系。
    */ BindAxb(query: {
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "SecretBindDTO": {
            "Extension": string;
            "SecretNo": string;
            "SubsId": string;
        };
    }>;
    /**
    * 调用接口QueryRecordFileDownloadUrl获取录音文件的下载链接。
    */ QueryRecordFileDownloadUrl(query: {
        "RegionId"?: string;
        /**
        * 呼叫记录ID，用于标识一条通话记录。
        * 请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**呼叫记录查询**中查看**呼叫记录ID**。
        * @example `abcedf1234`
        */ "CallId": string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey"?: string;
        /**
        * 呼叫记录中的呼叫发起时间。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**呼叫记录查询**中查看**呼叫发起时间**，或者在话单回执消息中查看call_time字段。
        * @example `2019-03-05 12:00:00	`
        */ "CallTime"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * 产品类型。
        * > 适用于原阿里大于客户，阿里云用户可忽略。
        * @example `AXB_170`
        */ "ProductType"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "DownloadUrl": string;
        "Code": string;
    }>;
    /**
    * 调用接口BindAxnExtension添加AXN分机号码的绑定关系。
    */ BindAxnExtension(query: {
        "RegionId"?: string;
        /**
        * AXN中的A号码。
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
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * X号码的分机号码，1~3位。
        * @example `130`
        */ "Extension"?: string;
        /**
        * AXN中的B号码，A号码拨打X号码时会转接到B号码，可通过接口**UpdateSubscription**更新B号码。
        * B号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
        * @example `15000000001`
        */ "PhoneNoB"?: string;
        /**
        * AXN中的X号码。未指定X号码时，将根据参数**ExpectCity**从指定号码池中随机指定一个号码作为X号码。
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "SecretBindDTO": {
            "Extension": string;
            "SecretNo": string;
            "SubsId": string;
        };
    }>;
    /**
    * 调用接口BindAxn添加AXN号码的绑定关系。
    */ BindAxn(query: {
        "RegionId"?: string;
        /**
        * AXN中的A号码。
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
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * AXN中的B号码，A号码拨打X号码时会转接到B号码，可通过接口**UpdateSubscription**更新B号码。
        * B号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
        * @example `13100000000`
        */ "PhoneNoB"?: string;
        /**
        * AXN中的X号码。未指定X号码时，将根据参数**ExpectCity**从指定号码池中随机指定一个号码作为X号码。
        * X号码是您绑定号码前在控制台或通过接口**BuySecretNo**购买的电话号码，用于转接电话。
        * @example `17000000000`
        */ "PhoneNoX"?: string;
        /**
        * 指定城市进行X号码的选号。
        * 如果当前号池中没有该城市的可用号码，或未指定此参数，将从当前号码池中随机分配一个其他城市的号码作为X号码。
        * 如果配置了严格模式，则不存在符合条件的号码时会提示分配错误。
        * @example `上海`
        */ "ExpectCity"?: string;
        /**
        * 是否需要针对该绑定关系产生的所有通话录制通话录音。
        * @example `true`
        */ "IsRecordingEnabled"?: boolean;
        /**
        * 号码类型。
        * > 适用于原阿里大于客户，阿里云用户可忽略。
        * @example `AXB_170`
        */ "NoType"?: string;
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "SecretBindDTO": {
            "Extension": string;
            "SecretNo": string;
            "SubsId": string;
        };
    }>;
    /**
    * 调用接口BindAxg添加AXG号码的绑定关系。
    */ BindAxg(query: {
        "RegionId"?: string;
        /**
        * AXG中的A号码。
        * A号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
        * @example `15000000000`
        */ "PhoneNoA": string;
        /**
        * AXG中的G组ID，即GID。
        * 可以通过以下方式查看GID：
        * - 在[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)中的**号码池管理**页面筛选出**AXG隐私号**，并单击**G号码组管理**即可查看所有G号码组的GID。
        * - 如果G号码组是通过接口**CreateAxgGroup**创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
        * > G号码组中必须有一个及以上的电话号码。
        * @example `1234`
        */ "GroupId": string;
        /**
        * 绑定关系的过期时间。必须晚于当前时间1分钟以上。
        * @example `2019-09-05 12:00:00`
        */ "Expiration": string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey"?: string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * AXG中的B号码，A号码拨打X号码时会转接到B号码，可通过接口**UpdateSubscription**更新B号码。
        * B号码可设置为手机号码或固定电话，固定电话需要加区号，区号和号码中间不需要加连字符，例如057188992688。
        * @example `15000000001`
        */ "PhoneNoB"?: string;
        /**
        * AXG中的X号码。未指定X号码时，将根据参数**ExpectCity**从指定号码池中随机指定一个号码作为X号码。
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "SecretBindDTO": {
            "Extension": string;
            "SecretNo": string;
            "SubsId": string;
        };
    }>;
    /**
    * 调用接口CreateAxgGroup创建G号码组。
    */ CreateAxgGroup(query: {
        "RegionId"?: string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
        /**
        * G号码组名称。如果未指定G号码组名称，将以G号码组的ID作为名称。
        * 取值范围为1~128个字符，支持中文和英文。
        * @example `测试分组`
        */ "Name"?: string;
        /**
        * G号码组的备注信息。取值范围为0~256个字符，支持中文和英文。
        * @example `测试用分组`
        */ "Remark"?: string;
        /**
        * 向新建的G分组中添加的电话号码，多个号码之间用英文逗号（,）分隔，创建时最多添加200个号码。
        * @example `15800000000,15900000000	`
        */ "Numbers"?: string;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
        "GroupId": number;
    }>;
    /**
    * 调用接口OperateAxgGroup修改G号码组。
    */ OperateAxgGroup(query: {
        "RegionId"?: string;
        /**
        * 号码池Key。请登录[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)，在**号码池管理**中查看号码池Key。
        * @example `FC123456`
        */ "PoolKey": string;
        /**
        * AXG中的G组ID，即GID。
        * 可以通过以下方式查看GID：
        * - 在[号码隐私保护控制台](https://dypls.console.aliyun.com/dypls.htm#/account)中的**号码池管理**页面筛选出**AXG隐私号**，并单击**G号码组管理**即可查看所有G号码组的GID。
        * - 如果G号码组是通过接口**CreateAxgGroup**创建的，则接口的返回参数**GroupID**就是此处的请求参数**GroupID**。
        * @example `1234`
        */ "GroupId": number;
        /**
        * 对G号码组的操作类型，包括：
        * - **addNumbers**：添加号码。
        * - **deleteNumbers**：删除号码。
        * - **overwriteNumbers**：全量替换号码。会将G号码组中原有的电话号码全部删除，并重新添加号码。
        * **说明**：
        * - 全量替换号码时，G号码组中原有的号码不能超过200个。
        * - 每次添加号码时，最多添加200个号码。
        * @example `addNumbers`
        */ "OperateType": string;
        /**
        * 向新建的G分组中添加的电话号码，多个号码之间用英文逗号（,）分隔，每次最多添加200个号码。
        * @example `15800000000,15900000000	`
        */ "Numbers": string;
        /**
        * RAM用户的虚拟账号ID。
        * @example `155780923770`
        */ "OwnerId"?: number;
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口UpdateSubscription修改绑定关系。
    */ UpdateSubscription(query: {
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "Code": string;
    }>;
    /**
    * 调用接口UnbindSubscription解除号码的绑定关系。
    */ UnbindSubscription(query: {
        "RegionId"?: string;
        /**
        * 绑定关系ID。
        * 可以在控制台的**号码管理** > **号码详情**中查看绑定关系ID，或者在调用BindAxb等号码绑定API时查看返回参数中的**SubsId**。
        * @example `1000000768798832`
        */ "SubsId": string;
        /**
        * 隐私号码。调用BindAXG等号码绑定接口时指定或自动分配的X号码。
        * @example `17000000000`
        */ "SecretNo": string;
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
    }): Promise<{
        "Message": string;
        "RequestId": string;
        "ChargeId": boolean;
        "Code": string;
    }>;
}
export default DYPLSAPI;
