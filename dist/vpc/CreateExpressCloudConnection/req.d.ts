interface CreateExpressCloudConnectionRequest {
    /**
    * 高速上云服务实例所在的地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * 本地数据中心的地理位置。
    * 需要精确到楼层。
    * @example `XX区XX大厦XX栋5楼`
    */ "PeerLocation": string;
    /**
    * IDC的网络服务商。
    * @example `CU`
    */ "IdcSP": string;
    /**
    * 高速上云连接的带宽， 单位Mbps。
    * 取值：**2|4|6|8|10|20|50|100|200|500|1000|10000|40000**
    * @example `2`
    */ "Bandwidth": number;
    "OwnerId"?: number;
    /**
    * 高速上云服务的实例名称。
    * 长度为 2-128个字符，必须以字母或中文开头，可包含数字，点号（.），下划线（_）和短横线（-）。但不能以`http://` 或`https://`开头。
    * @example `doctest`
    */ "Name"?: string;
    /**
    * 高速上云服务的描述信息。
    * 长度为 2-256个字符，必须以字母或中文开头，但不能以`http:// `或`https://`开头。
    * @example `高速上云服务`
    */ "Description"?: string;
    /**
    * 所在城市。
    * @example `杭州`
    */ "PeerCity"?: string;
    /**
    * 物理专线接入端口类型，取值：
    * - 100Base-T：百兆电口
    * - 1000Base-T（默认值）：千兆电口
    * - 1000Base-LX：千兆单模光口（10千米）
    * - 10GBase-T：万兆电口
    * - 10GBase-LR：万兆单模光口（10千米）
    * @example `100Base-T`
    */ "PortType"?: string;
    /**
    * 申请高速上云服务的联系人电话。
    * @example `152XXXXXXXX`
    */ "ContactTel"?: string;
    /**
    * 申请高速上云连接的联系人邮件。
    * @example `XX@example.com`
    */ "ContactMail"?: string;
    /**
    * 申请高速上云服务的联系人身份证号。
    * @example `32****************`
    */ "IDCardNo"?: string;
    /**
    * 冗余高速上云服务专线实例ID。
    * @example `ecc-d****`
    */ "RedundantEccId"?: string;
}
export { CreateExpressCloudConnectionRequest };