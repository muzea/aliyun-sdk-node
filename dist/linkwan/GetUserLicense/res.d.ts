export interface GetUserLicenseResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 各项服务的容量与当前使用量。
     */
    Data: {
        /**
         * 泛在入网凭证服务的用量。
         * 针对开发者类的用户，表示当前用户账号已经申请的泛在入网凭证的数量。
         * @example `100`
         */
        RoamingJoinPermissionCount: number;
        /**
         * 网关安全元组的服务用量。
         * 表示当前用户账号已经申请了的网关安全元组的数量。
         * @example `100`
         */
        GatewayTupleCount: number;
        /**
         * 单通道网关已用数量。
         * 表示当前用户账号接入服务的单通道网关数量。
         * @example `100`
         */
        GatewayTupleSingleChannelCount: number;
        /**
         * 网关接入服务的免费容量。
         * 表示当前用户账号可以免费接入的网关数量上限，其值必然小于等于 GatewayLimit。
         * @example `100`
         */
        GatewayFreeLimit: number;
        /**
         * 节点安全元组的免费服务容量。
         * 表示当前用户账号可以申请的免费节点安全元组的数量，其值必然小于等于NodeTupleLimit。
         * @example `100`
         */
        NodeTupleFreeLimit: number;
        /**
         * 节点接入服务的免费容量。
         * 表示当前用户账号可以免费接入的节点数量上限，其值必然小于等于NodeLimit。
         * @example `100`
         */
        NodeFreeLimit: number;
        /**
         * hybird网关密钥容量。
         * 表示当前用户账号可以使用的hybird网关密钥数量上限。
         * @example `100`
         */
        GatewayTupleHybridLimit: number;
        /**
         * 网关合约密钥-标准规格已用数量。
         * 表示当前用户账号已用的网关合约密钥-标准规格数量。
         * @example `100`
         */
        GatewayTupleStandardCount: number;
        /**
         * 网关安全元组的免费服务容量。
         * 表示当前用户账号可以申请的免费网关安全元组的数量，其值必然小于等于GatewayTupleLimit。
         * @example `100`
         */
        GatewayTupleFreeLimit: number;
        /**
         * 网关接入服务的用量。
         * 表示当前用户账号已经接入的网关数量。
         * @example `100`
         */
        GatewayCount: number;
        /**
         * 中继密钥配额。
         * 表示当前用户账号中继密钥配额。
         * @example `100`
         */
        NodeTupleRelayLimit: number;
        /**
         * 网关接入服务的容量。
         * 表示当前用户账号可以接入的网关数量上限。
         * @example `100`
         */
        GatewayLimit: number;
        /**
         * 网关安全元组的服务容量。
         * 表示当前用户账号最多可以申请的网关安全元组的数量。
         * @example `100`
         */
        GatewayTupleLimit: number;
        /**
         * 专用入网凭证服务的免费容量。
         * 针对网络运营者类的用户，表示当前用户账号可以免费创建的专用入网凭证的数量上限，其值必然小于等于LocalJoinPermissionLimit。
         * @example `100`
         */
        LocalJoinPermissionFreeLimit: number;
        /**
         * 节点接入服务的容量。
         * 表示当前用户账号可以接入的节点数量上限。
         * @example `100`
         */
        NodeLimit: number;
        /**
         * 泛在入网凭证服务的容量。
         * 针对开发者（解决方案供应商）类的用户，表示当前用户账号可以申请的泛在入网凭证的数量上限。
         * @example `100`
         */
        RoamingJoinPermissionLimit: number;
        /**
         * 网关单通道密钥配额。
         * 表示当前用户账号网关单通道密钥配额。
         * @example `100`
         */
        GatewayTupleSingleChannelLimit: number;
        /**
         * 专用入网凭证服务的容量。
         * 针对网络运营者类的用户，表示当前用户账号可以创建的专用入网凭证的数量上限。
         * @example `100`
         */
        LocalJoinPermissionLimit: number;
        /**
         * LoRaWAN模组、设备制造商类的用户的组织码。改组织码会体现在用户申请到的DevEUI中。
         * @example `0000`
         */
        Oui: string;
        /**
         * 中继节点配额。
         * 表示当前用户账号中继节点配额。
         * @example `100`
         */
        RelayLimit: number;
        /**
         * hybird网关密钥已用数量。
         * 表示当前用户账号已经使用的hybird网关密钥数量。
         * @example `100`
         */
        GatewayTupleHybridCount: number;
        /**
         * 专用入网凭证服务的用量。
         * 针对网络运营者类的用户，表示当前用户账号已经创建的专用入网凭证的数量。
         * @example `100`
         */
        LocalJoinPermissionCount: number;
        /**
         * 节点合约密钥-标准规格已用数量。
         * 表示当前用户账号已用节点合约密钥-标准规格数量。
         * @example `100`
         */
        NodeTupleStandardCount: number;
        /**
         * 节点安全元组的服务用量。
         * 表示当前用户账号已经申请了的节点安全元组的数量。
         * @example `100`
         */
        NodeTupleCount: number;
        /**
         * 钉钉网关接入服务的容量。
         * @example `100`
         */
        GatewayDingTalkLimit: number;
        /**
         * 专业网关接入服务的容量。
         * @example `100`
         */
        GatewayProfessionalLimit: number;
        /**
         * 专业网关接入服务的容量。
         * @example `100`
         */
        GatewayProfessionalCount: number;
        /**
         * 中继节点已用数量。
         * 表示当前用户已用中级节点数量。
         * @example `100`
         */
        RelayCount: number;
        /**
         * 节点合约密钥-标准规格限额。
         * 表示当前用户账号可以接入节点合约密钥-标准规格容量。
         * @example `100`
         */
        NodeTupleStandardLimit: number;
        /**
         * 泛在入网凭证服务的免费容量。
         * 针对开发者类的用户，表示当前用户账号可以免费申请的泛在入网凭证的数量上限，其值必然小于等于RoamingJoinPermissionLimit。
         * @example `100`
         */
        RoamingJoinPermissionFreeLimit: number;
        /**
         * 节点（LoRaWAN模组）安全元组的服务容量。
         * 表示当前用户账号最多可以申请的节点安全元组的数量。
         * @example `100`
         */
        NodeTupleLimit: number;
        /**
         * 节点接入服务的用量。
         * 表示当前用户账号已经接入的节点数量。
         * @example `100`
         */
        NodeCount: number;
        /**
         * 钉钉网关接入服务的用量。
         * @example `100`
         */
        GatewayDingTalkCount: number;
        /**
         * 网关合约密钥-标准规格限额。
         * 表示当前用户账号可以接入网关合约密钥-标准规格容量。
         * @example `100`
         */
        GatewayTupleStandardLimit: number;
        /**
         * 网关接入服务的预付费数量。
         * 表示当前用户账号已经接入的预付费网关数量。
         * @example `100`
         */
        GatewayPrePayCount: number;
        /**
         * 中继密钥已用数量。
         * 表示当前用户账号接入的中继密钥数量。
         * @example `100`
         */
        NodeTupleRelayCount: number;
    };
}
