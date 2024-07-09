export interface InnerSignInRequest {
    "body"?: {
        phone_number: string;
        phone_region: string;
        email: string;
        sign_in_type: string;
        sms_code_id: string;
        sms_code: string;
        user_name: string;
        password: string;
        key_pair_id: string;
        remarks: string;
        nvc_param: string;
    };
}
