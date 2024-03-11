// Enums

// Numeric Enums

enum Res {
    No = 0,
    Yes = 1
}

function isValide(str: string): Res {
    if (str.length >= 15) {
        return Res.Yes
    }
    else {
        return Res.No;
    }
}

// String Enums
enum Message {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function proces(isSuccess: boolean): Message {
    if (isSuccess) {
        return Message.Success;
    } else {
        return Message.Failure;
    }
}