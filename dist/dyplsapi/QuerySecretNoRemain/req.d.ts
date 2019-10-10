interface QuerySecretNoRemainRequest {
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
}
export { QuerySecretNoRemainRequest };