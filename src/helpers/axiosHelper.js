import axios from "axios";
const apiEndPointmessage = "http://localhost:8000/api/v1/messages";
const apiEndPointLogins = "http://localhost:8000/api/v1/logins";

export const getAPIMessages = async () => {
  try {
    const { data } = await axios.get(apiEndPointmessage);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};
export const postAPIMessages = async (obj) => {
  try {
    const { data } = await axios.post(apiEndPointmessage, obj);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};

export const deleteAPIMessages = async (id) => {
  try {
    const { data } = await axios.delete(apiEndPointmessage + "/" + id);
    return data;
  } catch (error) {
    return {
      status: "success",
      message: error.message,
    };
  }
};
export const getAPILogins = async () => {
  try {
    const { data } = await axios.get(apiEndPointLogins);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};
export const postAPILogins = async (obj) => {
  try {
    const { data } = await axios.post(apiEndPointLogins, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: "error.message",
    };
  }
};
