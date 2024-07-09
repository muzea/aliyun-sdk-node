import { AsymmetricDecryptRequest } from "./AsymmetricDecrypt/req";
import { AsymmetricDecryptResponse } from "./AsymmetricDecrypt/res";
import { AsymmetricEncryptRequest } from "./AsymmetricEncrypt/req";
import { AsymmetricEncryptResponse } from "./AsymmetricEncrypt/res";
import { AsymmetricSignRequest } from "./AsymmetricSign/req";
import { AsymmetricSignResponse } from "./AsymmetricSign/res";
import { CancelKeyDeletionRequest } from "./CancelKeyDeletion/req";
import { CancelKeyDeletionResponse } from "./CancelKeyDeletion/res";
import { AsymmetricVerifyRequest } from "./AsymmetricVerify/req";
import { AsymmetricVerifyResponse } from "./AsymmetricVerify/res";
import { CertificatePrivateKeyDecryptRequest } from "./CertificatePrivateKeyDecrypt/req";
import { CertificatePrivateKeyDecryptResponse } from "./CertificatePrivateKeyDecrypt/res";
import { CertificatePrivateKeySignRequest } from "./CertificatePrivateKeySign/req";
import { CertificatePrivateKeySignResponse } from "./CertificatePrivateKeySign/res";
import { CertificatePublicKeyEncryptRequest } from "./CertificatePublicKeyEncrypt/req";
import { CertificatePublicKeyEncryptResponse } from "./CertificatePublicKeyEncrypt/res";
import { CertificatePublicKeyVerifyRequest } from "./CertificatePublicKeyVerify/req";
import { CertificatePublicKeyVerifyResponse } from "./CertificatePublicKeyVerify/res";
import { CreateAliasRequest } from "./CreateAlias/req";
import { CreateAliasResponse } from "./CreateAlias/res";
import { CreateCertificateRequest } from "./CreateCertificate/req";
import { CreateCertificateResponse } from "./CreateCertificate/res";
import { CreateKeyRequest } from "./CreateKey/req";
import { CreateKeyResponse } from "./CreateKey/res";
import { CreateKeyVersionRequest } from "./CreateKeyVersion/req";
import { CreateKeyVersionResponse } from "./CreateKeyVersion/res";
import { CreateSecretRequest } from "./CreateSecret/req";
import { CreateSecretResponse } from "./CreateSecret/res";
import { DecryptRequest } from "./Decrypt/req";
import { DecryptResponse } from "./Decrypt/res";
import { DeleteAliasRequest } from "./DeleteAlias/req";
import { DeleteAliasResponse } from "./DeleteAlias/res";
import { DeleteCertificateRequest } from "./DeleteCertificate/req";
import { DeleteCertificateResponse } from "./DeleteCertificate/res";
import { DeleteKeyMaterialRequest } from "./DeleteKeyMaterial/req";
import { DeleteKeyMaterialResponse } from "./DeleteKeyMaterial/res";
import { DeleteSecretRequest } from "./DeleteSecret/req";
import { DeleteSecretResponse } from "./DeleteSecret/res";
import { DescribeCertificateRequest } from "./DescribeCertificate/req";
import { DescribeCertificateResponse } from "./DescribeCertificate/res";
import { DescribeKeyRequest } from "./DescribeKey/req";
import { DescribeKeyResponse } from "./DescribeKey/res";
import { DescribeKeyVersionRequest } from "./DescribeKeyVersion/req";
import { DescribeKeyVersionResponse } from "./DescribeKeyVersion/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeSecretRequest } from "./DescribeSecret/req";
import { DescribeSecretResponse } from "./DescribeSecret/res";
import { DisableKeyRequest } from "./DisableKey/req";
import { DisableKeyResponse } from "./DisableKey/res";
import { EnableKeyRequest } from "./EnableKey/req";
import { EnableKeyResponse } from "./EnableKey/res";
import { EncryptRequest } from "./Encrypt/req";
import { EncryptResponse } from "./Encrypt/res";
import { ExportDataKeyRequest } from "./ExportDataKey/req";
import { ExportDataKeyResponse } from "./ExportDataKey/res";
import { GenerateAndExportDataKeyRequest } from "./GenerateAndExportDataKey/req";
import { GenerateAndExportDataKeyResponse } from "./GenerateAndExportDataKey/res";
import { GenerateDataKeyRequest } from "./GenerateDataKey/req";
import { GenerateDataKeyResponse } from "./GenerateDataKey/res";
import { GenerateDataKeyWithoutPlaintextRequest } from "./GenerateDataKeyWithoutPlaintext/req";
import { GenerateDataKeyWithoutPlaintextResponse } from "./GenerateDataKeyWithoutPlaintext/res";
import { GetCertificateRequest } from "./GetCertificate/req";
import { GetCertificateResponse } from "./GetCertificate/res";
import { GetParametersForImportRequest } from "./GetParametersForImport/req";
import { GetParametersForImportResponse } from "./GetParametersForImport/res";
import { GetPublicKeyRequest } from "./GetPublicKey/req";
import { GetPublicKeyResponse } from "./GetPublicKey/res";
import { GetRandomPasswordRequest } from "./GetRandomPassword/req";
import { GetRandomPasswordResponse } from "./GetRandomPassword/res";
import { GetSecretValueRequest } from "./GetSecretValue/req";
import { GetSecretValueResponse } from "./GetSecretValue/res";
import { ImportKeyMaterialRequest } from "./ImportKeyMaterial/req";
import { ImportKeyMaterialResponse } from "./ImportKeyMaterial/res";
import { ListAliasesRequest } from "./ListAliases/req";
import { ListAliasesResponse } from "./ListAliases/res";
import { ListAliasesByKeyIdRequest } from "./ListAliasesByKeyId/req";
import { ListAliasesByKeyIdResponse } from "./ListAliasesByKeyId/res";
import { ListKeyVersionsRequest } from "./ListKeyVersions/req";
import { ListKeyVersionsResponse } from "./ListKeyVersions/res";
import { ListKeysRequest } from "./ListKeys/req";
import { ListKeysResponse } from "./ListKeys/res";
import { ListResourceTagsRequest } from "./ListResourceTags/req";
import { ListResourceTagsResponse } from "./ListResourceTags/res";
import { ListSecretVersionIdsRequest } from "./ListSecretVersionIds/req";
import { ListSecretVersionIdsResponse } from "./ListSecretVersionIds/res";
import { ListSecretsRequest } from "./ListSecrets/req";
import { ListSecretsResponse } from "./ListSecrets/res";
import { PutSecretValueRequest } from "./PutSecretValue/req";
import { PutSecretValueResponse } from "./PutSecretValue/res";
import { ReEncryptRequest } from "./ReEncrypt/req";
import { ReEncryptResponse } from "./ReEncrypt/res";
import { RestoreSecretRequest } from "./RestoreSecret/req";
import { RestoreSecretResponse } from "./RestoreSecret/res";
import { RotateSecretRequest } from "./RotateSecret/req";
import { RotateSecretResponse } from "./RotateSecret/res";
import { ScheduleKeyDeletionRequest } from "./ScheduleKeyDeletion/req";
import { ScheduleKeyDeletionResponse } from "./ScheduleKeyDeletion/res";
import { TagResourceRequest } from "./TagResource/req";
import { TagResourceResponse } from "./TagResource/res";
import { UntagResourceRequest } from "./UntagResource/req";
import { UntagResourceResponse } from "./UntagResource/res";
import { UpdateAliasRequest } from "./UpdateAlias/req";
import { UpdateAliasResponse } from "./UpdateAlias/res";
import { UpdateCertificateStatusRequest } from "./UpdateCertificateStatus/req";
import { UpdateCertificateStatusResponse } from "./UpdateCertificateStatus/res";
import { UpdateKeyDescriptionRequest } from "./UpdateKeyDescription/req";
import { UpdateKeyDescriptionResponse } from "./UpdateKeyDescription/res";
import { UpdateRotationPolicyRequest } from "./UpdateRotationPolicy/req";
import { UpdateRotationPolicyResponse } from "./UpdateRotationPolicy/res";
import { UpdateSecretRequest } from "./UpdateSecret/req";
import { UpdateSecretResponse } from "./UpdateSecret/res";
import { UpdateSecretRotationPolicyRequest } from "./UpdateSecretRotationPolicy/req";
import { UpdateSecretRotationPolicyResponse } from "./UpdateSecretRotationPolicy/res";
import { UpdateSecretVersionStageRequest } from "./UpdateSecretVersionStage/req";
import { UpdateSecretVersionStageResponse } from "./UpdateSecretVersionStage/res";
import { UploadCertificateRequest } from "./UploadCertificate/req";
import { UploadCertificateResponse } from "./UploadCertificate/res";
import { OpenKmsServiceRequest } from "./OpenKmsService/req";
import { OpenKmsServiceResponse } from "./OpenKmsService/res";
import { DescribeAccountKmsStatusRequest } from "./DescribeAccountKmsStatus/req";
import { DescribeAccountKmsStatusResponse } from "./DescribeAccountKmsStatus/res";
import { SetDeletionProtectionRequest } from "./SetDeletionProtection/req";
import { SetDeletionProtectionResponse } from "./SetDeletionProtection/res";
import { ListPoliciesRequest } from "./ListPolicies/req";
import { ListPoliciesResponse } from "./ListPolicies/res";
import { ListNetworkRulesRequest } from "./ListNetworkRules/req";
import { ListNetworkRulesResponse } from "./ListNetworkRules/res";
import { DeleteApplicationAccessPointRequest } from "./DeleteApplicationAccessPoint/req";
import { DeleteApplicationAccessPointResponse } from "./DeleteApplicationAccessPoint/res";
import { ListApplicationAccessPointsRequest } from "./ListApplicationAccessPoints/req";
import { ListApplicationAccessPointsResponse } from "./ListApplicationAccessPoints/res";
import { DescribeApplicationAccessPointRequest } from "./DescribeApplicationAccessPoint/req";
import { DescribeApplicationAccessPointResponse } from "./DescribeApplicationAccessPoint/res";
import { CreateNetworkRuleRequest } from "./CreateNetworkRule/req";
import { CreateNetworkRuleResponse } from "./CreateNetworkRule/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { DeleteNetworkRuleRequest } from "./DeleteNetworkRule/req";
import { DeleteNetworkRuleResponse } from "./DeleteNetworkRule/res";
import { CreateApplicationAccessPointRequest } from "./CreateApplicationAccessPoint/req";
import { CreateApplicationAccessPointResponse } from "./CreateApplicationAccessPoint/res";
import { UpdateApplicationAccessPointRequest } from "./UpdateApplicationAccessPoint/req";
import { UpdateApplicationAccessPointResponse } from "./UpdateApplicationAccessPoint/res";
import { UpdateNetworkRuleRequest } from "./UpdateNetworkRule/req";
import { UpdateNetworkRuleResponse } from "./UpdateNetworkRule/res";
import { UpdatePolicyRequest } from "./UpdatePolicy/req";
import { UpdatePolicyResponse } from "./UpdatePolicy/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { DescribePolicyRequest } from "./DescribePolicy/req";
import { DescribePolicyResponse } from "./DescribePolicy/res";
import { DeleteClientKeyRequest } from "./DeleteClientKey/req";
import { DeleteClientKeyResponse } from "./DeleteClientKey/res";
import { CreateClientKeyRequest } from "./CreateClientKey/req";
import { CreateClientKeyResponse } from "./CreateClientKey/res";
import { ListClientKeysRequest } from "./ListClientKeys/req";
import { ListClientKeysResponse } from "./ListClientKeys/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeNetworkRuleRequest } from "./DescribeNetworkRule/req";
import { DescribeNetworkRuleResponse } from "./DescribeNetworkRule/res";
import { ConnectKmsInstanceRequest } from "./ConnectKmsInstance/req";
import { ConnectKmsInstanceResponse } from "./ConnectKmsInstance/res";
import { ListKmsInstancesRequest } from "./ListKmsInstances/req";
import { ListKmsInstancesResponse } from "./ListKmsInstances/res";
import { GetKmsInstanceRequest } from "./GetKmsInstance/req";
import { GetKmsInstanceResponse } from "./GetKmsInstance/res";
import { GetClientKeyRequest } from "./GetClientKey/req";
import { GetClientKeyResponse } from "./GetClientKey/res";
import { UpdateKmsInstanceBindVpcRequest } from "./UpdateKmsInstanceBindVpc/req";
import { UpdateKmsInstanceBindVpcResponse } from "./UpdateKmsInstanceBindVpc/res";
import { GetKeyPolicyRequest } from "./GetKeyPolicy/req";
import { GetKeyPolicyResponse } from "./GetKeyPolicy/res";
import { GetSecretPolicyRequest } from "./GetSecretPolicy/req";
import { GetSecretPolicyResponse } from "./GetSecretPolicy/res";
import { SetKeyPolicyRequest } from "./SetKeyPolicy/req";
import { SetKeyPolicyResponse } from "./SetKeyPolicy/res";
import { SetSecretPolicyRequest } from "./SetSecretPolicy/req";
import { SetSecretPolicyResponse } from "./SetSecretPolicy/res";

interface KMS {
    /**
     * 调用AsymmetricDecrypt接口使用非对称密钥进行解密。
     */
    AsymmetricDecrypt(query: AsymmetricDecryptRequest): Promise<AsymmetricDecryptResponse>;
    /**
     * 调用AsymmetricEncrypt接口使用非对称密钥进行加密。
     */
    AsymmetricEncrypt(query: AsymmetricEncryptRequest): Promise<AsymmetricEncryptResponse>;
    /**
     * 调用AsymmetricSign接口使用非对称密钥进行签名。
     */
    AsymmetricSign(query: AsymmetricSignRequest): Promise<AsymmetricSignResponse>;
    /**
     * 调用CancelKeyDeletion接口撤销密钥删除。
     */
    CancelKeyDeletion(query: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse>;
    /**
     * 调用AsymmetricVerify接口使用非对称密钥进行验签。
     */
    AsymmetricVerify(query: AsymmetricVerifyRequest): Promise<AsymmetricVerifyResponse>;
    /**
     * 调用CertificatePrivateKeyDecrypt接口使用指定证书解密数据。
     */
    CertificatePrivateKeyDecrypt(query: CertificatePrivateKeyDecryptRequest): Promise<CertificatePrivateKeyDecryptResponse>;
    /**
     * 调用CertificatePrivateKeySign接口使用指定证书生成数字签名。
     */
    CertificatePrivateKeySign(query: CertificatePrivateKeySignRequest): Promise<CertificatePrivateKeySignResponse>;
    /**
     * 调用CertificatePublicKeyEncrypt接口使用指定证书加密数据。
     */
    CertificatePublicKeyEncrypt(query: CertificatePublicKeyEncryptRequest): Promise<CertificatePublicKeyEncryptResponse>;
    /**
     * 调用CertificatePublicKeyVerify接口使用指定证书验证数字签名。
     */
    CertificatePublicKeyVerify(query: CertificatePublicKeyVerifyRequest): Promise<CertificatePublicKeyVerifyResponse>;
    /**
     * 调用CreateAlias接口为主密钥（CMK）创建一个别名。
     */
    CreateAlias(query: CreateAliasRequest): Promise<CreateAliasResponse>;
    /**
     * 调用CreateCertificate接口创建证书。
     */
    CreateCertificate(query: CreateCertificateRequest): Promise<CreateCertificateResponse>;
    /**
     * 调用CreateKey接口创建一个主密钥。
     */
    CreateKey(query: CreateKeyRequest): Promise<CreateKeyResponse>;
    /**
     * 调用CreateKeyVersion接口为用户主密钥（CMK）创建密钥版本。
     */
    CreateKeyVersion(query: CreateKeyVersionRequest): Promise<CreateKeyVersionResponse>;
    /**
     * 并存入凭据的初始版本。
     */
    CreateSecret(query: CreateSecretRequest): Promise<CreateSecretResponse>;
    /**
     * 解密CiphertextBlob中的密文。
     */
    Decrypt(query: DecryptRequest): Promise<DecryptResponse>;
    /**
     * 调用DeleteAlias接口删除别名。
     */
    DeleteAlias(query: DeleteAliasRequest): Promise<DeleteAliasResponse>;
    /**
     * 删除证书及其对应的私钥和证书链。
     */
    DeleteCertificate(query: DeleteCertificateRequest): Promise<DeleteCertificateResponse>;
    /**
     * 调用DeleteKeyMaterial接口删除已导入的密钥材料。
     */
    DeleteKeyMaterial(query: DeleteKeyMaterialRequest): Promise<DeleteKeyMaterialResponse>;
    /**
     * 调用DeleteSecret接口删除凭据对象。
     */
    DeleteSecret(query: DeleteSecretRequest): Promise<DeleteSecretResponse>;
    /**
     * 调用DescribeCertificate接口查询证书信息。
     */
    DescribeCertificate(query: DescribeCertificateRequest): Promise<DescribeCertificateResponse>;
    /**
     * 调用DescribeKey接口查询用户主密钥（CMK）详情。
     */
    DescribeKey(query: DescribeKeyRequest): Promise<DescribeKeyResponse>;
    /**
     * 调用DescribeKeyVersion接口查询指定密钥版本信息。
     */
    DescribeKeyVersion(query: DescribeKeyVersionRequest): Promise<DescribeKeyVersionResponse>;
    /**
     * 调用DescribeRegions接口查询当前账号的可用地域列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 调用DescribeSecret接口查询凭据的元数据信息。
     */
    DescribeSecret(query: DescribeSecretRequest): Promise<DescribeSecretResponse>;
    /**
     * 调用DisableKey接口禁用指定的主密钥（CMK）进行加解密。
     */
    DisableKey(query: DisableKeyRequest): Promise<DisableKeyResponse>;
    /**
     * 调用EnableKey接口启用指定的主密钥进行加解密。
     */
    EnableKey(query: EnableKeyRequest): Promise<EnableKeyResponse>;
    /**
     * 调用Encrypt接口使用对称主密钥（Symmetric CMK）将明文加密为密文。
     */
    Encrypt(query: EncryptRequest): Promise<EncryptResponse>;
    /**
     * 调用ExportDataKey接口使用传入的公钥加密导出数据密钥。
     */
    ExportDataKey(query: ExportDataKeyRequest): Promise<ExportDataKeyResponse>;
    /**
     * 调用GenerateAndExportDataKey接口随机生成一个数据密钥，通过您指定的主密钥（CMK）和公钥加密后，返回CMK加密数据密钥的密文和公钥加密数据密钥的密文。
     */
    GenerateAndExportDataKey(query: GenerateAndExportDataKeyRequest): Promise<GenerateAndExportDataKeyResponse>;
    /**
     * 调用GenerateDataKey接口生成一个随机的数据密钥，用于本地数据加密。
     */
    GenerateDataKey(query: GenerateDataKeyRequest): Promise<GenerateDataKeyResponse>;
    /**
     * 生成一个随机的数据密钥。可以用数据密钥进行本地数据的加密。
     */
    GenerateDataKeyWithoutPlaintext(query: GenerateDataKeyWithoutPlaintextRequest): Promise<GenerateDataKeyWithoutPlaintextResponse>;
    /**
     * 调用GetCertificate接口查询证书管家托管的证书。
     */
    GetCertificate(query: GetCertificateRequest): Promise<GetCertificateResponse>;
    /**
     * 调用GetParametersForImport接口获取导入主密钥材料的参数。
     */
    GetParametersForImport(query: GetParametersForImportRequest): Promise<GetParametersForImportResponse>;
    /**
     * 获取非对称密钥的公钥。可以在本地使用公钥进行加密、验签。
     */
    GetPublicKey(query: GetPublicKeyRequest): Promise<GetPublicKeyResponse>;
    /**
     * 调用GetRandomPassword接口获得一个随机口令字符串。
     */
    GetRandomPassword(query: GetRandomPasswordRequest): Promise<GetRandomPasswordResponse>;
    /**
     * 调用GetSecretValue接口获取凭据值。
     */
    GetSecretValue(query: GetSecretValueRequest): Promise<GetSecretValueResponse>;
    /**
     * 调用ImportKeyMaterial接口导入密钥材料。
     */
    ImportKeyMaterial(query: ImportKeyMaterialRequest): Promise<ImportKeyMaterialResponse>;
    /**
     * 调用ListAliases接口查询当前用户在当前地域的所有别名。
     */
    ListAliases(query: ListAliasesRequest): Promise<ListAliasesResponse>;
    /**
     * 查询与指定主密钥（CMK）对应的所有别名。
     */
    ListAliasesByKeyId(query: ListAliasesByKeyIdRequest): Promise<ListAliasesByKeyIdResponse>;
    /**
     * 调用ListKeyVersions接口列出主密钥的所有密钥版本。
     */
    ListKeyVersions(query: ListKeyVersionsRequest): Promise<ListKeyVersionsResponse>;
    /**
     * 调用ListKeys查询调用者在调用地域的所有主密钥ID。
     */
    ListKeys(query: ListKeysRequest): Promise<ListKeysResponse>;
    /**
     * 调用ListResourceTags获取用户主密钥的标签。
     */
    ListResourceTags(query: ListResourceTagsRequest): Promise<ListResourceTagsResponse>;
    /**
     * 调用ListSecretVersionIds接口查询凭据的所有版本信息。
     */
    ListSecretVersionIds(query: ListSecretVersionIdsRequest): Promise<ListSecretVersionIdsResponse>;
    /**
     * 调用ListSecrets接口查询当前用户在当前地域创建的所有凭据。
     */
    ListSecrets(query: ListSecretsRequest): Promise<ListSecretsResponse>;
    /**
     * 调用PutSecretValue接口为凭据存入一个新版本的凭据值。
     */
    PutSecretValue(query: PutSecretValueRequest): Promise<PutSecretValueResponse>;
    /**
     * 对密文进行转加密。即先将密文解密，然后将解密得到的数据或者数据密钥使用新的主密钥再次进行加密，返回加密结果。
     */
    ReEncrypt(query: ReEncryptRequest): Promise<ReEncryptResponse>;
    /**
     * 调用RestoreSecret接口恢复被删除的凭据。
     */
    RestoreSecret(query: RestoreSecretRequest): Promise<RestoreSecretResponse>;
    /**
     * 主动轮转动态凭据（目前只有托管RDS凭据），普通凭据不可使用。
     */
    RotateSecret(query: RotateSecretRequest): Promise<RotateSecretResponse>;
    /**
     * 调用ScheduleKeyDeletion接口申请删除一个指定的主密钥（CMK)。
     */
    ScheduleKeyDeletion(query: ScheduleKeyDeletionRequest): Promise<ScheduleKeyDeletionResponse>;
    /**
     * 调用TagResource接口为主密钥、凭据或证书绑定标签。
     */
    TagResource(query: TagResourceRequest): Promise<TagResourceResponse>;
    /**
     * 调用UntagResource接口为主密钥、凭据或证书解绑标签。
     */
    UntagResource(query: UntagResourceRequest): Promise<UntagResourceResponse>;
    /**
     * 更新已存在的别名所代表的主密钥（CMK）ID。
     */
    UpdateAlias(query: UpdateAliasRequest): Promise<UpdateAliasResponse>;
    /**
     * 调用UpdateCertificateStatus接口更新证书状态。
     */
    UpdateCertificateStatus(query: UpdateCertificateStatusRequest): Promise<UpdateCertificateStatusResponse>;
    /**
     * 调用UpdateKeyDescription接口更新主密钥的描述信息。
     */
    UpdateKeyDescription(query: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse>;
    /**
     * 更新密钥轮转策略。
     */
    UpdateRotationPolicy(query: UpdateRotationPolicyRequest): Promise<UpdateRotationPolicyResponse>;
    /**
     * 调用UpdateSecret接口更新凭据的元数据。
     */
    UpdateSecret(query: UpdateSecretRequest): Promise<UpdateSecretResponse>;
    /**
     * 调用UpdateSecretRotationPolicy接口更新凭据轮转策略。
     */
    UpdateSecretRotationPolicy(query: UpdateSecretRotationPolicyRequest): Promise<UpdateSecretRotationPolicyResponse>;
    /**
     * 调用UpdateSecretVersionStage接口更新凭据的版本状态。
     */
    UpdateSecretVersionStage(query: UpdateSecretVersionStageRequest): Promise<UpdateSecretVersionStageResponse>;
    /**
     * 调用UploadCertificate接口将CA机构颁发的证书和证书链导入证书管家。
     */
    UploadCertificate(query: UploadCertificateRequest): Promise<UploadCertificateResponse>;
    /**
     * 调用OpenKmsService接口为当前阿里云账号开通密钥管理服务。
     */
    OpenKmsService(query: OpenKmsServiceRequest): Promise<OpenKmsServiceResponse>;
    /**
     * 调用DescribeAccountKmsStatus接口查询当前阿里云账号的密钥管理服务状态。
     */
    DescribeAccountKmsStatus(query: DescribeAccountKmsStatusRequest): Promise<DescribeAccountKmsStatusResponse>;
    /**
     * 为用户主密钥（CMK）开启或关闭删除保护。
     */
    SetDeletionProtection(query: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse>;
    /**
     * 查询权限策略列表。
     */
    ListPolicies(query: ListPoliciesRequest): Promise<ListPoliciesResponse>;
    /**
     * 查询网络控制规则列表。
     */
    ListNetworkRules(query: ListNetworkRulesRequest): Promise<ListNetworkRulesResponse>;
    /**
     * 删除一个应用接入点。
     */
    DeleteApplicationAccessPoint(query: DeleteApplicationAccessPointRequest): Promise<DeleteApplicationAccessPointResponse>;
    /**
     * 查询应用接入点列表。
     */
    ListApplicationAccessPoints(query: ListApplicationAccessPointsRequest): Promise<ListApplicationAccessPointsResponse>;
    /**
     * 查询一个应用接入点的详情。
     */
    DescribeApplicationAccessPoint(query: DescribeApplicationAccessPointRequest): Promise<DescribeApplicationAccessPointResponse>;
    /**
     * 创建一条网络控制规则，设置允许访问KMS的私网IP或私网的网段。
     */
    CreateNetworkRule(query: CreateNetworkRuleRequest): Promise<CreateNetworkRuleResponse>;
    /**
     * 删除一条权限策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 删除一条网络控制规则。
     */
    DeleteNetworkRule(query: DeleteNetworkRuleRequest): Promise<DeleteNetworkRuleResponse>;
    /**
     * 创建一个应用接入点。
     */
    CreateApplicationAccessPoint(query: CreateApplicationAccessPointRequest): Promise<CreateApplicationAccessPointResponse>;
    /**
     * 更新一个应用接入点信息。
     */
    UpdateApplicationAccessPoint(query: UpdateApplicationAccessPointRequest): Promise<UpdateApplicationAccessPointResponse>;
    /**
     * 更新一个网络控制规则。
     */
    UpdateNetworkRule(query: UpdateNetworkRuleRequest): Promise<UpdateNetworkRuleResponse>;
    /**
     * 更新一个权限策略。
     */
    UpdatePolicy(query: UpdatePolicyRequest): Promise<UpdatePolicyResponse>;
    /**
     * 创建一个权限策略，设置允许应用访问的密钥和凭据。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 查询一个权限策略的详情。
     */
    DescribePolicy(query: DescribePolicyRequest): Promise<DescribePolicyResponse>;
    /**
     * 删除一个应用身份凭证（ClientKey）。
     */
    DeleteClientKey(query: DeleteClientKeyRequest): Promise<DeleteClientKeyResponse>;
    /**
     * 创建一个应用身份凭证（ClientKey）。
     */
    CreateClientKey(query: CreateClientKeyRequest): Promise<CreateClientKeyResponse>;
    /**
     * 查询应用身份凭证（ClientKey）列表。
     */
    ListClientKeys(query: ListClientKeysRequest): Promise<ListClientKeysResponse>;
    /**
     * 为密钥或凭据绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询密钥或凭据的标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为密钥或凭据解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询一个网络控制规则的详情。
     */
    DescribeNetworkRule(query: DescribeNetworkRuleRequest): Promise<DescribeNetworkRuleResponse>;
    /**
     * 启用一个KMS实例。
     */
    ConnectKmsInstance(query: ConnectKmsInstanceRequest): Promise<ConnectKmsInstanceResponse>;
    /**
     * 查询KMS实例列表。
     */
    ListKmsInstances(query: ListKmsInstancesRequest): Promise<ListKmsInstancesResponse>;
    /**
     * 查询一个KMS实例的详情。
     */
    GetKmsInstance(query: GetKmsInstanceRequest): Promise<GetKmsInstanceResponse>;
    /**
     * 获取一个应用身份凭证（ClientKey）信息。
     */
    GetClientKey(query: GetClientKeyRequest): Promise<GetClientKeyResponse>;
    /**
     * 更新KMS实例配置的VPC。
     */
    UpdateKmsInstanceBindVpc(query: UpdateKmsInstanceBindVpcRequest): Promise<UpdateKmsInstanceBindVpcResponse>;
    /**
     * 查询指定密钥的密钥策略。
     */
    GetKeyPolicy(query: GetKeyPolicyRequest): Promise<GetKeyPolicyResponse>;
    /**
     * 查询指定凭据的凭据策略。
     */
    GetSecretPolicy(query: GetSecretPolicyRequest): Promise<GetSecretPolicyResponse>;
    /**
     * 为KMS实例中的密钥设置密钥策略。
     */
    SetKeyPolicy(query: SetKeyPolicyRequest): Promise<SetKeyPolicyResponse>;
    /**
     * 为KMS实例中的凭据钥设置凭据策略。
     */
    SetSecretPolicy(query: SetSecretPolicyRequest): Promise<SetSecretPolicyResponse>;
}
export default KMS;
