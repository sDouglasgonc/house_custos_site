const {
    register,
    handleSubmit,
    formState: { errors },
    reset
} = useForm();

const [showMessage, setShowMessage] = useState(false);

const onSubmit = (data) => {
    if (!data.number) {
        setShowMessage(false);
        return;
    }

    console.log(data);
    setShowMessage(true);
    reset();
    if (onFill) {
        onFill(id, name, data.number)
    }
};