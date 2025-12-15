function status(request, response) {
  response.status(200).json({ status: "tudo certo aí" });
}

export default status;
